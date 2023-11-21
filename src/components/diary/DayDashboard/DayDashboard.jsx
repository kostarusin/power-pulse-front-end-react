import { useEffect, useState } from 'react';
//redux
import { useDiary, useAuth } from '../../../hooks';
//styles
import sprite from '../../../assets/icons-optimized.svg';
import icon from '../../../assets/icons.svg';
import styles from './DayDashboard.module.css';

function DayDashboard() {
  const { user } = useAuth();
  const { burnedCalories, consumedCalories } = useDiary();
  const { doneExercises } = useDiary();

  const { bmr, dailyExerciseTime } = user;

  const [caloriesColor, setCaloriesColor] = useState('');
  const [sportColor, setSportColor] = useState('');

  const DailyCalorieIntake = Math.floor(bmr);

  const totalSportsRemaining = doneExercises.reduce(
    (sum, exercise) => sum + exercise.time,
    0,
  );

  const SportsRemaining = dailyExerciseTime - totalSportsRemaining;
  let formattedSportsRemaining;
  if (SportsRemaining < 0) {
    formattedSportsRemaining = `+${Math.abs(SportsRemaining)}`;
  }

  const CaloriesRemaining = DailyCalorieIntake - consumedCalories;

  useEffect(() => {
    if (CaloriesRemaining <= 0) {
      setCaloriesColor('red');
    } else {
      setCaloriesColor('');
    }
    if (SportsRemaining <= 0) {
      setSportColor('green');
    } else {
      setSportColor('');
    }
  }, [CaloriesRemaining, SportsRemaining]);

  return (
    <div>
      <ul className={styles.container}>
        <li className={styles['user-daily-items']}>
          <div className={styles['user-daily']}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-fork-knife`}></use>
            </svg>
            <p className={styles['user-daily-text']}>Daily calorie intake</p>
          </div>

          <p className={styles['user-daily-text-value']}>
            {DailyCalorieIntake || 0}
          </p>
        </li>

        <li className={styles['user-daily-items']}>
          <div className={styles['user-daily']}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-dumbbell`}></use>
            </svg>
            <p className={styles['user-daily-text']}>Daily physical activity</p>
          </div>

          <p className={styles['user-daily-text-value']}>
            {dailyExerciseTime || 0} min
          </p>
        </li>

        <li className={styles['user-daily-items']}>
          <div className={styles['user-daily']}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-apple`}></use>
            </svg>
            <p className={styles['user-daily-text']}>Сalories consumed</p>
          </div>

          <p className={styles['user-daily-text-value']}>
            {Math.floor(consumedCalories) || 0}
          </p>
        </li>

        <li className={styles['user-daily-items']}>
          <div className={styles['user-daily']}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-calories`}></use>
            </svg>
            <p className={styles['user-daily-text']}>Сalories burned</p>
          </div>

          <p className={styles['user-daily-text-value']}>
            {burnedCalories || 0}
          </p>
        </li>

        <li
          className={styles['user-daily-items']}
          style={
            caloriesColor === 'red' ? { border: '1px solid #e6533c' } : null
          }
        >
          <div className={styles['user-daily']}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-bubble`}></use>
            </svg>
            <p className={styles['user-daily-text']}>Calories remaining</p>
          </div>

          <p className={styles['user-daily-text-value']}>
            {Math.floor(CaloriesRemaining) || 0}
          </p>
        </li>

        <li
          className={styles['user-daily-items']}
          style={
            sportColor === 'green' ? { border: '1px solid #3CBF61' } : null
          }
        >
          <div className={styles['user-daily']}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-running-figure`}></use>
            </svg>
            <p className={styles['user-daily-text']}>Sports remaining</p>
          </div>

          <p className={styles['user-daily-text-value']}>
            {SportsRemaining < 0
              ? formattedSportsRemaining + ' min'
              : SportsRemaining + ' min'}
          </p>
        </li>
      </ul>

      <p className={styles['user-notification']}>
        <span>
          <svg width="24" height="24">
            <use href={`${icon}#icon-exclamation-mark`}></use>
          </svg>
        </span>
        Record all your meals in the calorie diary every day. This will help you
        be aware of your nutrition and make informed choices.
      </p>
    </div>
  );
}

export default DayDashboard;
