import { useDispatch, useSelector } from 'react-redux';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import css from './WaistList.module.css';
import { selectExercises } from '../../../../redux/exercises/selectors';
import { useEffect } from 'react';
import { fetchExercises } from '../../../../redux/exercises/operations';
import images from '../img/Waist1.jpg';

export const ExercisesList = ({ activeFilter }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const exercises = useSelector(selectExercises);
  console.log('All Exercises:', exercises);

  console.log('Active Filter:', activeFilter); // Добавьте эту строку для отладки

  const visibleExercises = exercises.filter((exercise) => {
    return exercise.bodyPart.toLowerCase() === activeFilter.toLowerCase() ||
           exercise.equipment.toLowerCase() === activeFilter.toLowerCase() ||
           exercise.target.toLowerCase() === activeFilter.toLowerCase();
  });

  console.log('Filtered Exercises:', visibleExercises);
  return (
    <>
      <div className={css.waistListContainer}>
        <ul className={css.waistItemUl}>
          {visibleExercises.length ? (
            visibleExercises
              .slice(0, 50)
              .map((el) => <ExercisesItem key={el._id} data={el} />)
          ) : (
            <h2 className={css.noExercisesTitle}>
              There are no exercises in this category, please try again later!
            </h2>
          )}
        </ul>
        <img className={css.imgWaist} src={images} alt="Waist exercise image" />
      </div>
    </>
  );
};
