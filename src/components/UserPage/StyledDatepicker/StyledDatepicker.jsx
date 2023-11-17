import { forwardRef, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';

import sprite from '../../../assets/icons-optimized.svg';
import { CalendarGlobalStyles } from './StyledDatepicker.styled';
import css from './CustomInput.module.css';

const StyledDatepicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  console.log('selectedDate', selectedDate);
  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <div onClick={onClick} ref={ref} className={css.container}>
        <div>
          {selectedDate ? format(selectedDate, 'dd-MM-yyyy') : '00.00.0000'}
        </div>
        <div>
          <svg width="20" height="20" className={css.svg}>
            <use href={`${sprite}#icon-calendar-bage`}></use>
          </svg>
        </div>
      </div>
    );
  });

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);

          if (onChange) {
            onChange(date);
          }
        }}
        customInput={<CustomInput />}
        dateFormat={'dd-MM-yyyy'}
        calendarStartDay={1}
        isClearable={true}
        showYearDropdown={true}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
