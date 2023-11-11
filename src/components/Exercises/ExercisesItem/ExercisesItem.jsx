
import { PropTypes } from 'prop-types';
import css from './ExercisesItem.module.css'
export const ExercisesItem = () => {


  return (
    <li className={css.exercisesLi}>
      <img className={css.image} src="#"  />
      <div className={css.titleContainer}>
        <h3 className={css.exerciseItemTitle}></h3>
        <p className={css.exerciseItemText}></p>
      </div>
    </li>
  );
};

ExercisesItem.propTypes = {
  exercisesItem: PropTypes.object,
};