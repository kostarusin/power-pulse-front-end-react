import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
//components
import TitlePage from '../../components/diary/TitlePage';
import DayProducts from '../../components/diary/DayProducts';
import DayExercises from '../../components/diary/DayExercises';
import DayDashboard from '../../components/diary/DayDashboard';
import DaySwitch from '../../components/diary/DaySwitch';
import Loader from '../../components/Loader/index';
//redux
import { useDispatch } from 'react-redux';
import { getDiary } from '../../redux/dairy/operations';
import { refreshUser } from '../../redux/auth/operations';
import { useDiary } from '../../hooks';
import { useAuth } from '../../hooks';
//date lib
import { parseISO, startOfDay, parse } from 'date-fns';
import { addDays, subDays } from 'date-fns';
// style
import styles from './Dairy.module.css';

function Diary() {
  const navigate = useNavigate();
  const location = useLocation();
  const { date } = useParams();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { isLoading } = useDiary();

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
    dispatch(refreshUser());
  }, [dispatch]);

  const currentDate = new Date();
  const formattedDate = formattingDate(currentDate);

  const [selectedDate, setSelectedDate] = useState(
    date ? parse(date, 'dd-MM-yyyy', new Date()) : new Date(),
  );
  const minDate = startOfDay(parseISO(user.createdAt));
  const { doneExercises, consumedProducts } = useDiary();

  useEffect(() => {
    if (date) {
      dispatch(getDiary(date));
      navigate(`/diary/${date}`);
    } else {
      dispatch(getDiary(formattedDate));
      navigate(`/diary/${formattedDate}`);
    }

    const createdAtDate = parseISO(user.createdAt);
    const selectedDateFormatted = date
      ? parse(date, 'dd-MM-yyyy', new Date())
      : currentDate;

    const currentDateFormatted = formattingDate(currentDate);
    const createdAtDateFormatted = formattingDate(createdAtDate);
    const selectedDateFormattedString = formattingDate(selectedDateFormatted);

    if (selectedDateFormattedString === currentDateFormatted) {
      setAdditionalIconClass('opacity-right');
    } else if (selectedDateFormattedString === createdAtDateFormatted) {
      setAdditionalIconClass('opacity-left');
    } else {
      setAdditionalIconClass('');
    }
  }, [dispatch, date, formattedDate, navigate, user.createdAt]);

  const handlingDate = (date) => {
    const formattedDate = formattingDate(date);
    navigate(`/diary/${formattedDate}`);
    dispatch(getDiary(formattedDate));
  };

  const handleToPreviousDay = () => {
    const previousDate = subDays(selectedDate, 1);
    const createdAtDate = startOfDay(parseISO(user.createdAt));
    if (previousDate.getDate() === createdAtDate.getDate()) {
      setSelectedDate(previousDate);
      handlingDate(previousDate);
      return;
    }
    if (previousDate.getTime() < createdAtDate.getTime()) {
      return;
    }
    setSelectedDate(previousDate);
    handlingDate(previousDate);
  };

  const handleToNextDay = () => {
    const nextDate = addDays(selectedDate, 1);

    const currentDate = startOfDay(new Date());

    if (nextDate.getDate() === currentDate.getDate()) {
      setSelectedDate(nextDate);
      handlingDate(nextDate);
      return;
    }
    if (nextDate > currentDate) {
      return;
    }
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
        {isLoading && <Loader />}
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
          <DayProducts products={consumedProducts} location={location} />
          <DayExercises exercises={doneExercises} location={location} />
        </div>
        <DayDashboard />
      </div>
    </div>
  );
}

export default Diary;
