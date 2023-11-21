import { NavLink } from 'react-router-dom';
//style
import sprite from '../../../assets/icons-optimized.svg';
import styles from './DayExercises.module.css';
//component
import ExercisesList from './ExercisesList/ExercisesList';

function DayExercises({ exercises, location }) {
  return (
    <div className={styles.dayExercisesWrapper}>
      <div className={styles.headerWrapper}>
        <p className={styles.title}>Exercises</p>
        <div className={styles.btnWrapper}>
          <button className={styles.addExerciseBtn}>
            <NavLink className={styles.link} state={{from: location}} to="/exercises">
              Add exercise
            </NavLink>
            <svg width="16" height="16" className={styles.svg}>
              <use href={`${sprite}#icon-add-arrow`}></use>
            </svg>
          </button>
        </div>
      </div>

      <ExercisesList exercises={exercises} />
    </div>
  );
}

export default DayExercises;
