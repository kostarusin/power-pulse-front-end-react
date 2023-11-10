import { forwardRef, useState } from 'react';
import { format, addDays, subDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Datepicker.module.css';

const StyledDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  console.log(selectedDate);
  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <div onClick={onClick} ref={ref} className={css.datePicker}>
        <div className={css.input}>{format(selectedDate, 'dd/MM/yyyy')}</div>
        <div>sv</div>
      </div>
    );
  });

  const handlePrevDayClick = () => {
    setSelectedDate((prevDate) => subDays(prevDate, 1));
  };

  const handleNextDayClick = () => {
    setSelectedDate((prevDate) => addDays(prevDate, 1));
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
