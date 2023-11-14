import css from './ExercisesNavigation.module.css';
import { PropTypes } from 'prop-types';

export const ExercisesNavigation = ({ activeFilter, handleFilterClick }) => {
  return (
    <ul className={css.exercisesNavList}>
      <li className={activeFilter === 'Body parts' ? 'active' : ''}>
        <button 
          type="button"
          onClick={() => handleFilterClick('Body parts')}
          className={activeFilter === 'Body part' ? 'active' : ''}
        >
          Body parts
        </button>
      </li>
      <li className={activeFilter === 'Muscules' ? 'active' : ''}>
        <button className={activeFilter === 'Muscules' ? 'active' : ''}
          type="button" >
          Muscules
        </button>
      </li>
      <li className={activeFilter === 'Equipment' ? 'active' : ''}>
        <button className={activeFilter === 'Equipment' ? 'active' : ''}
          type="button"
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

