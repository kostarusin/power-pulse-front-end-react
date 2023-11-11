import css from './ExercisesNavigation.module.css';


export const ExercisesNavigation = ({ activeFilter, handleFilterClick }) => {
  return (
    <ul className={css.exercisesNavList}>
      <li className={css.exercisesFilter}>
        <button className={css.filterBtn}
          type="button"
          onClick={() => handleFilterClick('Body parts')}
        
        >
          Body parts
        </button>
      </li>
      <li className={css.exercisesFilter}>
        <button className={css.filterBtn}
          type="button" >
          Muscules
        </button>
      </li>
      <li className={css.exercisesFilter}>
        <button className={css.filterBtn}
          type="button"
        >
          Equipment
        </button>
      </li>
    </ul>
  );
};
