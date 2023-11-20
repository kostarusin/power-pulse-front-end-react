import PropTypes from 'prop-types';
import styles from './ExercisesNavigation.module.css';

export const ExercisesNavigation = ({
  exercisesFiler,
  handleFilterClick,
  setActiveName,
}) => {
  return (
    <ul className={styles.ExercisesNavList}>
      <li
        className={`${styles.ExercisesFilter} ${
          exercisesFiler === 'Body parts' ? styles.active : ''
        }`}
      >
        <button
          type="button"
          onClick={() => {
            handleFilterClick('Body parts');
            setActiveName('');
          }}
          className={`${styles.FilterBtn} ${
            exercisesFiler === 'Body parts' ? styles.active : ''
          }`}
        >
          Body parts
        </button>
      </li>
      <li
        className={`${styles.ExercisesFilter} ${
          exercisesFiler === 'Muscules' ? styles.active : ''
        }`}
      >
        <button
          type="button"
          onClick={() => {
            handleFilterClick('Muscules');
            setActiveName('');
          }}
          className={`${styles.FilterBtn} ${
            exercisesFiler === 'Muscules' ? styles.active : ''
          }`}
        >
          Muscles
        </button>
      </li>
      <li
        className={`${styles.ExercisesFilter} ${
          exercisesFiler === 'Equipment' ? styles.active : ''
        }`}
      >
        <button
          type="button"
          onClick={() => {
            handleFilterClick('Equipment');
            setActiveName('');
          }}
          className={`${styles.FilterBtn} ${
            exercisesFiler === 'Equipment' ? styles.active : ''
          }`}
        >
          Equipment
        </button>
      </li>
    </ul>
  );
};

ExercisesNavigation.propTypes = {
  exercisesFiler: PropTypes.string,
  handleFilterClick: PropTypes.func,
};
