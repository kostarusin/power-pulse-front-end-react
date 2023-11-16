import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//components
import TitlePage from '../../components/diary/TitlePage';
import DayProducts from '../../components/diary/DayProducts';
import DayExercises from 'components/diary/DayExercises';
import DayDashboard from 'components/diary/DayDashboard';
import DaySwitch from '../../components/diary/DaySwitch';
//redux
import { useDispatch } from 'react-redux';
import { getDiary } from '../../redux/dairy/operations';
import { getUserCalories } from '../../redux/auth/operations';
import { useDiary } from '../../redux/hooks';
import { useAuth } from '../../redux/hooks';
//date lib
import { parseISO, startOfDay } from 'date-fns';
import { addDays, subDays } from 'date-fns';
// style
import styles from './Dairy.module.css';

function Diary() {
  const navigate = useNavigate();
  // const {date} = useParams(); 
  const dispatch = useDispatch();
  const { user } = useAuth();

const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).replace(/\//g, '-');

   
  useEffect(() => {
     navigate(`/diary/${formattedDate}`);
  }, []);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const minDate = startOfDay(parseISO(user.birthday));


  const { doneExercises, consumedProducts } = useDiary();

  useEffect(() => {
    dispatch(getDiary(formattedDate));
  }, [dispatch, formattedDate]);

  useEffect(() => {
    dispatch(getUserCalories());
  }, [dispatch]);

  const handleToPreviousDay = () => {
    setSelectedDate((prevDate) => subDays(prevDate, 1));
    const previousDate = subDays(selectedDate, 1);
    const formattedPreviousDate = previousDate
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\//g, '-');
    navigate(`/diary/${formattedPreviousDate}`);
    dispatch(getDiary(formattedPreviousDate));
  };

  const handleToNextDay = () => {
    setSelectedDate((prevDate) => addDays(prevDate, 1));
    const nextDate = addDays(selectedDate, 1);
    const formattedNextDate = nextDate
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\//g, '-');
    navigate(`/diary/${formattedNextDate}`);
    dispatch(getDiary(formattedNextDate));
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
          <DayProducts
            products={consumedProducts}
            selectedDate={formattedDate}
          />
          <DayExercises
            exercises={doneExercises}
            selectedDate={formattedDate}
          />
        </div>
        <DayDashboard />
      </div>
    </div>
  );
}

export default Diary;
