import css from './HomeBackground.module.css';
import sprite from '../../assets/icons-optimized.svg';
import { useStatistics } from '../../hooks';
import calories from '../../assets/calories.png'

const HomeBackground = ({ darkPhoto }) => {
  const { statistics } = useStatistics();
  const amountOfBurnedCalories = `${Math.floor(statistics.totalBurnedCalories / 1000)}+k`;
  const hoursOfExercises = `${Math.floor(statistics.totalExerciseTime / 60)}+h`  

  return (
    <div className={css.image + (darkPhoto ? ' ' + css.image2 : '')}>
      <div className={css.statistic1}>
        <div className={css.boxsvg1}>
          <svg className={css.icon_users}>
            <use href={`${sprite}#icon-users`}></use>
          </svg>
        </div>
        <div className={css.boxp}>
          <p className={css.number1}>{statistics.totalUsers}</p>
          <p className={css.vid}>Users</p>
        </div>
      </div>

      <div className={css.statistic2}>
        <div className={css.boxsvg1}>
          <svg width="20" height="20" className={css.icon_play}>
            <use href={`${sprite}#icon-play`}></use>
          </svg>
        </div>
        <div className={css.boxp}>
          <p className={css.number1}>{statistics.totalExercises}</p>
          <p className={css.vid}>Video tutorial</p>
        </div>
      </div>

      <div className={css.statistic3}>
        <div className={css.stat3}>
          <div className={css.boxsvg2}>
            <svg width="20" height="20" className={css.icon_users}>
              <use href={`${sprite}#icon-running-figure-white`}></use>
            </svg>
          </div>
          <p className={css.vid2}>Sports time</p>
        </div>
        <p className={css.number2}>{hoursOfExercises}</p>
      </div>

      <div className={css.statistic4}>
        <div className={css.stat4}>
          <div className={css.boxsvg4}>
            <img src={calories} className={css.fire} alt="calories" />
          </div>
          <p className={css.vid2}>Calories burned</p>
        </div>

        <div className={css.boxp}>
          <p className={css.number3}>{amountOfBurnedCalories}</p>
        </div>
      </div>

      <div className={css.statistic5}>
        <div className={css.boxsvg1}>
          <svg width="20" height="20" className={css.dumbbell}>
            <use href={`${sprite}#icon-logo-dumbbell`}></use>
          </svg>
        </div>
        <div className={css.boxp}>
          <p className={css.number1}>{statistics.totalDoneExercises}</p>
          <p className={css.vid}>Done Exercises</p>
        </div>
      </div>

    </div>
  );
};

export default HomeBackground;
