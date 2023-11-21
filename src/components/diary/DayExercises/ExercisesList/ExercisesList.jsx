import { useState, useEffect } from 'react';
import css from './ExercisesList.module.css';
import { useDispatch } from 'react-redux';
import { deleteExerciseOrProduct } from '../../../../redux/dairy/operations';
import { useDiary } from '../../../../hooks';

import sprite from '../../../../assets/icons-optimized.svg';

function ExercisesList({ exercises }) {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { date } = useDiary();

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDeleteExercise = (exercise) => {
    dispatch(
      deleteExerciseOrProduct({
        date: date,
        credentials: {
          type: 'exercise',
          id: exercise._id,
        },
      }),
    );
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={css.wrapper}>
      {exercises.length !== 0 ? (
        exercises.map((exercise, index) => (
          <div className={css.wrapperListContainer} key={exercise._id}>
            <ul className={css.wrapperList}>
              <li className={css.wrapperBodyPart}>
                <div
                  className={css.title}
                  style={{
                    display:
                      viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                  }}
                >
                  Body Part
                </div>
                <div className={css.text}>
                  {capitalizeFirstLetter(exercise.exercise.bodyPart)}
                </div>
              </li>
              <li className={css.wrapperEquipment}>
                <div
                  className={css.title}
                  style={{
                    display:
                      viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                  }}
                >
                  Equipment
                </div>
                <div className={css.text}>
                  {capitalizeFirstLetter(exercise.exercise.equipment)}
                </div>
              </li>
              <li className={css.wrapeerName}>
                <div
                  className={css.title}
                  style={{
                    display:
                      viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                  }}
                >
                  Name
                </div>
                <div className={css.text}>
                  {capitalizeFirstLetter(exercise.exercise.name)}
                </div>
              </li>
              <li className={css.wrapperTarget}>
                <div
                  className={css.title}
                  style={{
                    display:
                      viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                  }}
                >
                  Target
                </div>
                <div className={css.text}>
                  {capitalizeFirstLetter(exercise.exercise.target)}
                </div>
              </li>
              <li className={css.wrapperBurnedCalories}>
                <div
                  className={css.title}
                  style={{
                    display:
                      viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                  }}
                >
                  Burned Calories
                </div>
                <div className={css.text}>{exercise.calories}</div>
              </li>
              <li className={css.wrapperTime}>
                <div
                  className={css.title}
                  style={{
                    display:
                      viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                  }}
                >
                  Time
                </div>
                <div className={css.flex}>
                  <div className={`${css.text} ${css.withTime}`}>
                    {exercise.time}
                  </div>
                  <button
                    type="button"
                    className={css.btnDelete}
                    onClick={() => handleDeleteExercise(exercise)}
                  >
                    <svg width="20" height="20" className={css.svg}>
                      <use href={`${sprite}#icon-trash`}></use>
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <div className={css.containerError}>
          <span>Not found products</span>
        </div>
      )}
    </div>
  );
}

export default ExercisesList;
