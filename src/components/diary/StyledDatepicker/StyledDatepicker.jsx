import { forwardRef } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';

import sprite from '../../../assets/icons-optimized.svg';
import { CalendarGlobalStyles } from './StyledDatepicker.styled';
import css from './CustomInput.module.css';

const StyledDatepicker = ({ selectedDate, onChange, minDate, maxDate }) => {
  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <div onClick={onClick} ref={ref} className={css.container}>
        <div className={css.txt}>{format(selectedDate, 'dd/MM/yyyy')}</div>
        <div>
          <svg className={css.svg}>
            <use href={`${sprite}#calendar`}></use>
          </svg>
        </div>
      </div>
    );
  });

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        customInput={<CustomInput />}
        minDate={minDate}
        maxDate={maxDate}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
