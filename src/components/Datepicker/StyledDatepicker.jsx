import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { format, addDays, subDays } from 'date-fns';
import MyCalendar from '../../svg/calendar.svg';
import ArrowLeft from '../../svg/chevronLeft.svg';
import ArrowRight from '../../svg/chevronRight.svg';

import 'react-datepicker/dist/react-datepicker.css';
import css from './StyledDatepicker.module.css';

const StyledDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <div onClick={onClick} ref={ref} className={css.containerDate}>
        <div className={css.datePickerInput}>
          {format(selectedDate, 'dd/MM/yyyy')}
        </div>
        <img src={MyCalendar} alt="My calendar" />
      </div>
    );
  });

  const handlePrevDayClick = () => {
    setSelectedDate((prevDate) => subDays(prevDate, 1));
  };

  const handleNextDayClick = () => {
    setSelectedDate((prevDate) => addDays(prevDate, 1)); // Increase the selected date by one day
  };

  return (
    <div className={css.container}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
      />

      <div className={css.wrapperArrows}>
        <img
          src={ArrowLeft}
          alt="Arrow left"
          className={css.arrowLeft}
          onClick={handlePrevDayClick}
        />
        <img src={ArrowRight} alt="Arrow right" onClick={handleNextDayClick} />
      </div>
    </div>
  );
};

export default StyledDatepicker;
