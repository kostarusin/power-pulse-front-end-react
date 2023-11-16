import { useDispatch, useSelector } from 'react-redux';
import { WaistItem } from '../WaistItem/WaistItem';
import css from './WaistList.module.css';
import { selectExercises } from '../../../../redux/exercises/selectors';
import { useEffect } from 'react';
import { fetchExercises } from '../../../../redux/exercises/operations';
import images from '../img/Waist1.jpg';

export const WaistList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const exercises = useSelector(selectExercises);

  const visibleExercises = exercises.filter(
    (exercise) =>
      exercise.bodyPart || exercise.muscles || exercise.equipment === '',
  );

  return (
    <>
      <div className={css.waistContainer}>
        <ul className={css.waistItemUl}>
          {visibleExercises.length ? (
            visibleExercises
              .slice(0, 50)
              .map((el) => <WaistItem key={el._id} data={el} />)
          ) : (
            <h2 className={css.noExercisesTitle}>
              There is not exercises downloaded else, please try choose this
              categorie later!!!
            </h2>
          )}
        </ul>
        <img className={css.imgWaist} src={images} alt="image" />
      </div>
    </>
  );
};
