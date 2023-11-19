import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import css from './WaistList.module.css';
import { useExercises } from '../../../hooks';
import images from '../img/Waist1.jpg';

export const ExercisesList = ({ activeName }) => {
  const { exercises } = useExercises();

  const visibleExercises = exercises.filter(
    (exercise) => exercise.bodyPart === activeName,
  );

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
