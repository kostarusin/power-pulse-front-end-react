import css from './AddExerciseForm.module.css';
import { ButtonModal } from '../ButtonModal/ButtonModal';

export const AddExerciseForm = ({ exercise }) => {
  return (
    <div className={css.module_container}>
      <div className={css.left_side}>
        <img src="" alt="" />
      </div>

      <div className={css.right_side}>
        <div className={css.exercise_descr}>
          <div className={css.exercise_div}>
            <p className={css.type}>Name</p>
            <p className={css.type_descr}>{exercise.name}</p>
          </div>
          <div className={css.exercise_div}>
            <p className={css.type}>Target</p>
            <p className={css.type_descr}>{exercise.target}</p>
          </div>
          <div className={css.exercise_div}>
            <p className={css.type}>Body Part</p>
            <p className={css.type_descr}>{exercise.bodyPart}</p>
          </div>
          <div className={css.exercise_div}>
            <p className={css.type}>Equipment</p>
            <p className={css.type_descr}>{exercise.equipment}</p>
          </div>
        </div>
        <ButtonModal btnType={'submit'} text={'Add to diary'} />
      </div>
    </div>
  );
};
