import PropTypes from 'prop-types';
import styles from './ExercisesNavigation.module.css';

export const ExercisesNavigation = ({ activeFilter, handleFilterClick }) => {
  return (
    <ul className={styles.ExercisesNavList}>
      <li
        className={`${styles.ExercisesFilter} ${
          activeFilter === 'Body part' ? styles.active : ''
        }`}
      >
        <button
          type="button"
          onClick={() => handleFilterClick('Body parts')}
          className={`${styles.FilterBtn} ${
            activeFilter === 'Body part' ? styles.active : ''
          }`}
        >
          Body parts
        </button>
      </li>
      <li
        className={`${styles.ExercisesFilter} ${
          activeFilter === 'Muscules' ? styles.active : ''
        }`}
      >
        <button
          type="button"
          onClick={() => handleFilterClick('Muscules')}
          className={`${styles.FilterBtn} ${
            activeFilter === 'Muscules' ? styles.active : ''
          }`}
        >
          Muscles
        </button>
      </li>
      <li
        className={`${styles.ExercisesFilter} ${
          activeFilter === 'Equipment' ? styles.active : ''
        }`}
      >
        <button
          type="button"
          onClick={() => handleFilterClick('Equipment')}
          className={`${styles.FilterBtn} ${
            activeFilter === 'Equipment' ? styles.active : ''
          }`}
        >
          Equipment
        </button>
      </li>
    </ul>
  );
};

ExercisesNavigation.propTypes = {
  activeFilter: PropTypes.string,
  handleFilterClick: PropTypes.func,
};
