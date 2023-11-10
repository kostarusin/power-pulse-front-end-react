import styles from './DayDashboard.module.css';

function DayDashboard() {
  return (
    <div>
      <ul className={styles.container}>
        <li className={styles.box}>
          <div className={styles.header}>
            sv
            <p>Daily calorie intake</p>
          </div>
          <p className={styles.result}>num</p>
        </li>
        <li className={styles.box}>
          <div className={styles.header}>
            sv
            <p>Daily norm of sports</p>
          </div>
          <p className={styles.result}>num</p>
        </li>
        <li className={styles.darkBox}>
          <div className={styles.header}>
            sv
            <p className={styles.title}>Calories consumed</p>
          </div>
          <p className={styles.result}>num</p>
        </li>
        <li className={styles.darkBox}>
          <div className={styles.header}>
            sv
            <p className={styles.title}>Calories burned</p>
          </div>
          <p className={styles.result}>num</p>
        </li>
        <li className={styles.darkBox}>
          <div className={styles.header}>
            sv
            <p className={styles.title}>Rest of the calories</p>
          </div>
          <p className={styles.result}>num</p>
        </li>
        <li className={styles.darkBox}>
          <div className={styles.header}>
            sv
            <p className={styles.title}>The rest of sports</p>
          </div>
          <p className={styles.result}>num</p>
        </li>
      </ul>
      <div className={styles.textCont}>
        sv
        <p className={styles.text}>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </p>
      </div>
    </div>
  );
}

export default DayDashboard;
