import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/icons-optimized.svg';

import styles from './DayExercises.module.css';

import TableExercises from './TableExercises';

function DayExercises({ exercises }) {
  return (
    <div className={styles.dayExercisesWrapper}>
      <div className={styles.headerWrapper}>
        <p className={styles.title}>Exercises</p>
        <div className={styles.btnWrapper}>
          <button className={styles.addExerciseBtn}>
            <NavLink className={styles.link} to="/exercises">
              Add exercise
            </NavLink>
            <svg width="16" height="16">
              <use href={`${sprite}#icon-add-arrow`}></use>
            </svg>
          </button>
        </div>
      </div>

      <TableExercises exercises={exercises} />
    </div>
  );
}

export default DayExercises;
