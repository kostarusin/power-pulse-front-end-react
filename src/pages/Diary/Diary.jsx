import TitlePage from '../../components/diary/TitlePage';
import DayProducts from '../../components/diary/DayProducts';
import DayExercises from 'components/diary/DayExercises';
import DayDashboard from 'components/diary/DayDashboard';
import DaySwitch from '../../components/diary/DaySwitch';
import styles from './Dairy.module.css';
import { useEffect, useState } from 'react';
import { addDays, subDays } from 'date-fns';
import { format } from 'date-fns';
//redux
import { useDispatch } from 'react-redux';
import { getDiary } from '../../redux/dairy/operations';
import { useDiary } from '../../redux/hooks';

function Diary() {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const minDate = '13/11/2023';
  const formattedDate = format(selectedDate, 'dd/MM/yyyy');
  const { doneExercises, consumedProducts } = useDiary();

  useEffect(() => {
    dispatch(getDiary({ date: formattedDate }));
  }, [dispatch, formattedDate]);

  const handleToPreviousDay = () => {
    setSelectedDate((prevDate) => subDays(prevDate, 1));
  };

  const handleToNextDay = () => {
    setSelectedDate((prevDate) => addDays(prevDate, 1));
  };

  return (
    <div className={styles.backGround}>
      <div className={styles.titleCont}>
        <TitlePage title="Diary" />
        <DaySwitch
          minDate={minDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          handleToNextDay={handleToNextDay}
          handleToPreviousDay={handleToPreviousDay}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.itemsCont}>
          <DayProducts products={consumedProducts} />
          <DayExercises exercises={doneExercises} />
        </div>
        <DayDashboard />
      </div>
    </div>
  );
}

export default Diary;
