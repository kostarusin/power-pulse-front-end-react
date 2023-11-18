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
          id: exercise._id,
        },
      }),
    );
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
                  {exercise.bodyPart.charAt(0).toUpperCase() +
                    exercise.bodyPart.slice(1)}
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
                  {exercise.equipment.charAt(0).toUpperCase() +
                    exercise.equipment.slice(1)}
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
                  {exercise.name.charAt(0).toUpperCase() +
                    exercise.name.slice(1)}
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
                  {exercise.target.charAt(0).toUpperCase() +
                    exercise.target.slice(1)}
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
                    <svg width="20" height="20">
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
