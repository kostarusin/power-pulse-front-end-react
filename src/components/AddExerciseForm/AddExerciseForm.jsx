import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import css from './AddExerciseForm.module.css';
import icons from '../../assets/icons.svg';
import { ButtonModal } from '../ButtonModal/ButtonModal';
import { useEffect, useState } from 'react';

export const AddExerciseForm = ({ exercise }) => {
  const [duration, setDuration] = useState(0);
  const [burnedCalories, setBurnedCalories] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
  
    if (isPlaying) {
      timer = setInterval(() => {
        setDuration(prevDuration => {
          const newDuration = prevDuration + 1;
          console.log('duration', newDuration);

          if (newDuration === 180) {
            clearInterval(timer);
            setIsPlaying(false);
          }

          return newDuration;
        });
      }, 1000);
    } 
   
    else {
      clearInterval(timer);
    }
  
    return () => {
      clearInterval(timer);
    };
  }, [isPlaying, setIsPlaying]);

  useEffect(() => {
    const calories = ((duration / 60) * exercise.burnedCalories / 3).toFixed();
    setBurnedCalories(calories);
  }, [duration])

  const togglePlayer = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
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
            Burned calories: <span className={css.calories_amount}>{burnedCalories}</span>
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
        <ButtonModal btnType={'button'} text={'Add to diary'} />
      </div>
    </div>
  );
};
