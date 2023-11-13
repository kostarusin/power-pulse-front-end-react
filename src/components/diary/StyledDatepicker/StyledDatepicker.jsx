import { forwardRef, useEffect, useState } from 'react';
import { format, addDays, subDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles } from './StyledDatepicker.styled';
//redux
import { useDispatch } from 'react-redux';
import { getDiary } from '../../../redux/dairy/operations';
//styles
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../../assets/icons-optimized.svg';
import css from './Datepicker.module.css';

const StyledDatepicker = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const dateNow = format(Date.now(), 'dd/MM/yyyy');
  // console.log(selectedDate);
  const date = '13/11/2023';
  useEffect(() => {
    dispatch(getDiary(date));
  }, [dispatch, dateNow]);

  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <div onClick={onClick} ref={ref} className={css.datePicker}>
        <div className={css.input}>{format(selectedDate, 'dd/MM/yyyy')}</div>
        <div>
          <svg width="20" height="20">
            <use href={`${sprite}#icon-calendar-bage`}></use>
          </svg>
        </div>
      </div>
    );
  });

  const handlePrevDayClick = () => {
    setSelectedDate((prevDate) => subDays(prevDate, 1));
    dispatch(getDiary(selectedDate));
  };

  const handleNextDayClick = () => {
    setSelectedDate((prevDate) => addDays(prevDate, 1));
    dispatch(getDiary(selectedDate));
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
      />
      <button
        type="button"
        className={css.arrowLeft}
        onClick={handlePrevDayClick}
      >
        svl
      </button>
      <button type="button" onClick={handleNextDayClick}>
        svr
      </button>

      <CalendarGlobalStyles />
    </div>
  );
};

export default StyledDatepicker;
