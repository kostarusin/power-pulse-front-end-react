import styles from './DayDashboard.module.css';

function DayDashboard() {
  return (
    <div>
      <ul className={styles.container}>
        <li className={styles['user-daily-items']}>
          <div className={styles['user-daily']}>
            <svg width="20" height="20">
              <use href="src\assets\icons-optimized.svg#icon-fork-knife"></use>
            </svg>
            <p className={styles['user-daily-text']}>Daily calorie intake</p>
          </div>

          <p className={styles['user-daily-text-value']}>0</p>
        </li>

        <li className={styles['user-daily-items']}>
          <div className={styles['user-daily']}>
            <svg width="20" height="20">
              <use href="src\assets\icons-optimized.svg#icon-dumbbell"></use>
            </svg>
            <p className={styles['user-daily-text']}>Daily physical activity</p>
          </div>

          <p className={styles['user-daily-text-value']}>0 min</p>
        </li>

        <li className={styles['user-daily-items']}>
          <div className={styles['user-daily']}>
            <svg width="20" height="20">
              <use href="src\assets\icons-optimized.svg#icon-apple"></use>
            </svg>
            <p className={styles['user-daily-text']}>Сalories consumed</p>
          </div>

          <p className={styles['user-daily-text-value']}>0 </p>
        </li>

        <li className={styles['user-daily-items']}>
          <div className={styles['user-daily']}>
            <svg width="20" height="20">
              <use href="src\assets\icons-optimized.svg#icon-calories"></use>
            </svg>
            <p className={styles['user-daily-text']}>Сalories burned</p>
          </div>

          <p className={styles['user-daily-text-value']}>0 </p>
        </li>

        <li className={styles['user-daily-items']}>
          <div className={styles['user-daily']}>
            <svg width="20" height="20">
              <use href="src\assets\icons-optimized.svg#icon-bubble"></use>
            </svg>
            <p className={styles['user-daily-text']}>Calories remaining</p>
          </div>

          <p className={styles['user-daily-text-value']}>0 </p>
        </li>

        <li className={styles['user-daily-items']}>
          <div className={styles['user-daily']}>
            <svg width="20" height="20">
              <use href="src\assets\icons-optimized.svg#icon-running-figure"></use>
            </svg>
            <p className={styles['user-daily-text']}>Sports remaining</p>
          </div>

          <p className={styles['user-daily-text-value']}>0 min</p>
        </li>
      </ul>

      <p className={styles['user-notification']}>
        <span>
          <svg width="24" height="24">
            <use href="src\assets\icons.svg#icon-exclamation-mark"></use>
          </svg>
        </span>
        Record all your meals in the calorie diary every day. This will help you
        be aware of your nutrition and make informed choices.
      </p>
    </div>
  );
}

export default DayDashboard;
