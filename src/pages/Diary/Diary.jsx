//components
import TitlePage from '../../components/diary/TitlePage';
import DayProducts from '../../components/diary/DayProducts';
import DayExercises from 'components/diary/DayExercises';
import DayDashboard from 'components/diary/DayDashboard';
import StyledDatepicker from '../../components/diary/StyledDatepicker/StyledDatepicker';
//style
import styles from './Dairy.module.css';

function Diary() {
  return (
    <div className={styles.backGround}>
      <div className={styles.titleCont}>
        <TitlePage title="Diary" />
        <StyledDatepicker />
      </div>
      <div className={styles.container}>
        <div className={styles.itemsCont}>
          <DayProducts products={[]} />
          <DayExercises exercises={[]} />
        </div>
        <DayDashboard />
      </div>
    </div>
  );
}

export default Diary;
