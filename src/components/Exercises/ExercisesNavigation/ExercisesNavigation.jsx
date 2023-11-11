import css from './ExercisesNavigation.module.css';


export const ExercisesNavigation = () => {
  return (
    <ul className={css.exercisesNavList}>
      <li >
        <button className={css.filterBtn}
          type="button"
        >
          Body parts
        </button>
      </li>
      <li >
        <button className={css.filterBtn}
          type="button" >
          Muscules
        </button>
      </li>
      <li>
        <button className={css.filterBtn}
          type="button"
        >
          Equipment
        </button>
      </li>
    </ul>
  );
};
