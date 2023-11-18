import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//components
import TitlePage from '../../components/diary/TitlePage';
import DayProducts from '../../components/diary/DayProducts';
import DayExercises from '../../components/diary/DayExercises';
import DayDashboard from '../../components/diary/DayDashboard';
import DaySwitch from '../../components/diary/DaySwitch';
//redux
import { useDispatch } from 'react-redux';
import { getDiary } from '../../redux/dairy/operations';
import { getUserCalories } from '../../redux/auth/operations';
import { useDiary } from '../../hooks';
import { useAuth } from '../../hooks';
//date lib
import { parseISO, startOfDay } from 'date-fns';
import { addDays, subDays } from 'date-fns';
// style
import styles from './Dairy.module.css';

function Diary() {
  const navigate = useNavigate();
  const { date } = useParams();
  const dispatch = useDispatch();
  const { user } = useAuth();

  const [additionalIconClass, setAdditionalIconClass] =
    useState('opacity-right');

  const formattingDate = (date) => {
    return date
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\//g, '-');
  };

  useEffect(() => {
    dispatch(getDiary(date));
  }, [dispatch, date]);

  const currentDate = new Date();
  const formattedDate = formattingDate(currentDate);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const minDate = startOfDay(parseISO(user.birthday));

  const { doneExercises, consumedProducts } = useDiary();

  useEffect(() => {
    dispatch(getDiary(formattedDate));
    navigate(`/diary/${formattedDate}`);
  }, [dispatch, formattedDate]);

  useEffect(() => {
    dispatch(getUserCalories());
  }, [dispatch]);

  const handlingDate = (date) => {
    const formattedDate = formattingDate(date);
    navigate(`/diary/${formattedDate}`);
    dispatch(getDiary(formattedDate));
  };

  const handleToPreviousDay = () => {
    const previousDate = subDays(selectedDate, 1);
    if (previousDate < minDate) {
      setAdditionalIconClass('opacity-left');
      return;
    }
    setAdditionalIconClass('');
    setSelectedDate(previousDate);
    handlingDate(previousDate);
  };

  const handleToNextDay = () => {
    const nextDate = addDays(selectedDate, 1);
    const currentDate = startOfDay(new Date());

    if (nextDate.getDate() === currentDate.getDate()) {
      setAdditionalIconClass('opacity-right');
      setSelectedDate(nextDate);
      handlingDate(nextDate);
      return;
    }

    if (nextDate > currentDate) {
      return;
    }

    setAdditionalIconClass('');
    setSelectedDate(nextDate);
    handlingDate(nextDate);
  };

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    handlingDate(selectedDate);
  };

  return (
    <div className={`${styles.backGround} layoutContainer`}>
      <div className={styles.titleCont}>
        <TitlePage title="Diary" />
        <DaySwitch
          minDate={minDate}
          maxDate={currentDate}
          selectedDate={selectedDate}
          setSelectedDate={handleDateChange}
          handleToNextDay={handleToNextDay}
          handleToPreviousDay={handleToPreviousDay}
          additionalIconClass={additionalIconClass}
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
