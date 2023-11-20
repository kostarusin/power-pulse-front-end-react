import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import css from './AddExerciseForm.module.css';
import icons from '../../assets/icons.svg';
import { useEffect, useState } from 'react';
//redux
import { useDispatch } from 'react-redux';
import { addExercises } from '../../redux/dairy/operations';
import { useDiary } from '../../hooks';

export const AddExerciseForm = ({
  exercise,
  toggleExerciseModal,
  toggleSuccessModal,
  setExercise,
}) => {
  const [duration, setDuration] = useState(0);
  const [burnedCalories, setBurnedCalories] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const { date } = useDiary();

  useEffect(() => {
    let timer;

    if (isPlaying) {
      timer = setInterval(() => {
        setDuration((prevDuration) => {
          const newDuration = prevDuration + 1;

          if (newDuration === 180) {
            clearInterval(timer);
            setIsPlaying(false);
          }

          return newDuration;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPlaying, setIsPlaying]);

  useEffect(() => {
    const calories = (
      ((duration / 60) * exercise.burnedCalories) /
      3
    ).toFixed();
    setBurnedCalories(calories);
  }, [duration, exercise.burnedCalories]);

  const togglePlayer = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const minutes = Math.floor(duration / 60);

  const submiExercise = () => {
    dispatch(
      addExercises({
        date: date,
        credentials: {
          doneExercises: [
            {
              exercise: exercise._id,
              time: minutes,
              calories: burnedCalories,
            },
          ],
        },
      }),
    );
    setExercise({ time: minutes, calories: burnedCalories });
    toggleExerciseModal();
    toggleSuccessModal();
  };

  return (
    <div className={css.module_container}>
      <div className={css.left_side}>
        <img
          className={css.gif}
          src={exercise.gifUrl}
          alt="Exercise technique"
        />
        <div className={css.timer}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            strokeWidth={4}
            duration={180}
            size={124}
            isGrowing={true}
            rotation="counterclockwise"
            colors={['#E6533C']}
            trailColor={['#323232']}
          >
            {({ remainingTime }) => {
              const minutes = Math.floor(remainingTime / 60);
              const seconds = remainingTime % 60;

              return `${String(minutes).padStart(2, '0')}:${String(
                seconds,
              ).padStart(2, '0')}`;
            }}
          </CountdownCircleTimer>
          {!isPlaying && (
            <svg className={css.play} onClick={togglePlayer}>
              <use href={icons + '#icon-play'} />
            </svg>
          )}
          {isPlaying && (
            <svg className={css.play} onClick={togglePlayer}>
              <use href={icons + '#icon-pause-square'} />
            </svg>
          )}
          <p className={css.calories}>
            Burned calories:{' '}
            <span className={css.calories_amount}>{burnedCalories}</span>
          </p>
        </div>
      </div>

      <div className={css.right_side}>
        <div className={css.exercise_descr}>
          <div className={css.exercise_div}>
            <p className={css.type}>Name</p>
            <p className={css.type_descr}>
              {capitalizeFirstLetter(exercise.name)}
            </p>
          </div>
          <div className={css.exercise_div}>
            <p className={css.type}>Target</p>
            <p className={css.type_descr}>
              {capitalizeFirstLetter(exercise.target)}
            </p>
          </div>
          <div className={css.exercise_div}>
            <p className={css.type}>Body Part</p>
            <p className={css.type_descr}>
              {capitalizeFirstLetter(exercise.bodyPart)}
            </p>
          </div>
          <div className={css.exercise_div}>
            <p className={css.type}>Equipment</p>
            <p className={css.type_descr}>
              {capitalizeFirstLetter(exercise.equipment)}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={submiExercise}
          disabled={minutes < 1}
          className={css.button}
        >
          Add to diary
        </button>
      </div>
    </div>
  );
};
