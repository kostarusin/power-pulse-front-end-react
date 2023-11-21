import css from './ExercisesSubcategoriesItem.module.css';
import assets from '../../../assets/0-default.jpg';
import { PropTypes } from 'prop-types';

export const ExercisesSubcategoriesItem = ({
  exercisesItem,
  // handleFilterClick,
  // handleSetExName,
  setActiveName,
}) => {
  const { name, filter, imgURL } = exercisesItem;

  const capitalizeFirstLeter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  return (
    <li
      className={css.exercisesLi}
      onClick={() => setActiveName(exercisesItem.name)}
    >
      <img className={css.image} src={imgURL ? imgURL : assets} alt={name} />
      <div className={css.titleContainer}>
        <h3 className={css.exerciseItemTitle}>{capitalizeFirstLeter(name)}</h3>
        <p className={css.exerciseItemtext}>{filter}</p>
      </div>
    </li>
  );
};

ExercisesSubcategoriesItem.propTypes = {
  exercisesItem: PropTypes.object,
};
