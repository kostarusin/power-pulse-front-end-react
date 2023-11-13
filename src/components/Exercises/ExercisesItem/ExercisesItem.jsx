
import { PropTypes } from 'prop-types';
import css from './ExercisesItem.module.css';
import images from 'src/images/0-default.jpg';
export const ExercisesItem = ({
  exercisesItem,
  handleFilterClick,
  handleSetExName,
}) => {
const { name, filter, imgURL } = exercisesItem;
  const onClick = name => {
    handleFilterClick('Waist');
    handleSetExName(name);
  };
const capitalizeFirstLeter = string => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };


  return (
    <li className={css.exercisesLi} onClick={() => onClick(name)}>
      <img className={css.image} src={imgURL ? imgURL : images} alt={name} />
      <div className={css.titleContainer}>
        <h3 className={css.exerciseItemTitle}>{capitalizeFirstLeter(name)}</h3>
        <p className={css.exerciseItemText}>{filter}</p>
      </div>
    </li>
  );
};

ExercisesItem.propTypes = {
  exercisesItem: PropTypes.object,
};