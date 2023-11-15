import { forwardRef } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';

import sprite from '../../../assets/icons-optimized.svg';
import { CalendarGlobalStyles } from './StyledDatepicker.styled';
import css from './CustomInput.module.css';

const StyledDatepicker = ({ selectedDate, onChange, minDate }) => {
  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <div onClick={onClick} ref={ref} className={css.container}>
        <div>{format(selectedDate, 'dd-MM-yyyy')}</div>
        <div>
          <svg width="20" height="20" className={css.svg}>
            <use href={`${sprite}#icon-calendar-bage`}></use>
          </svg>
          <svg width="16" height="16">
            <use href="/src/assets/icons-dairy-opt.svg#icon-leftopt"></use>
          </svg>
          <svg width="16" height="16">
            <use href="/src/assets/icons-dairy-opt.svg#icon-rightopt"></use>
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
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
