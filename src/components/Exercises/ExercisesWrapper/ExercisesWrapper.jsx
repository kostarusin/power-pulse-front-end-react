import css from './ExercisesWrapper.module.css';
import { BodyPartList } from '../ExercisesList/BodyPartList';
import { MusculesList } from '../ExercisesList/MusculesList';
import { EquipmentList } from '../ExercisesList/EquipmentList';
import { ExercisesNavigation } from '../ExercisesNavigation/ExercisesNavigation';

export const ExercisesWrap = () => {
  return (
    <div className={css.wrapper}>
      <li className={css.exercises_box}>
        <h2 className={css.exercises_title}>Exercises</h2>
        <h2 className={css.exercises_title}></h2>
<ExercisesNavigation />
      </li>

      <BodyPartList />

      <MusculesList />

      <EquipmentList />
    </div>
  );
};
