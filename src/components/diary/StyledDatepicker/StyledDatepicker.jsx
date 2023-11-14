import { forwardRef } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
//styles
import { CalendarGlobalStyles } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../../assets/icons-optimized.svg';

const StyledDatepicker = ({ selectedDate, onChange, minDate }) => {
  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <div onClick={onClick} ref={ref}>
        <div className={css.input}>{format(selectedDate, 'dd/MM/yyyy')}</div>
        <div>
          <svg width="20" height="20">
            <use href={`${sprite}#icon-calendar-bage`}></use>
          </svg>
        </div>
      </div>
    );
  });

  return (
    <div>
      <DatePicker
        inline
        selected={selectedDate}
        onChange={onChange}
        minDate={minDate}
        calendarStartDay={1}
        customInput={<CustomInput />}
      />

      <CalendarGlobalStyles />
    </div>
  );
};

export default StyledDatepicker;
