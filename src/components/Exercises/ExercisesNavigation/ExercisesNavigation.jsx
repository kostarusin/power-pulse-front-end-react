import PropTypes from 'prop-types';
import styles from './ExercisesNavigation.module.css';

export const ExercisesNavigation = ({
  activeFilter,
  handleFilterClick,
  setActiveName,
}) => {
  return (
    <ul className={styles.ExercisesNavList}>
      <li
        className={`${styles.ExercisesFilter} ${
          activeFilter === 'Body parts' ? styles.active : ''
        }`}
      >
        <button
          type="button"
          onClick={() => {
            handleFilterClick('Body parts');
            setActiveName('');
          }}
          className={`${styles.FilterBtn} ${
            -activeFilter === 'Body parts' ? styles.active : ''
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
          onClick={() => {
            handleFilterClick('Muscules');
            setActiveName('');
          }}
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
          onClick={() => {
            handleFilterClick('Equipment');
            setActiveName('');
          }}
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
