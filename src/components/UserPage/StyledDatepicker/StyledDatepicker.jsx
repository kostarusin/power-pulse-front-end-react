import { forwardRef, useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import DatePicker from 'react-datepicker';

import sprite from '../../../assets/icons-optimized.svg';
import { CalendarGlobalStyles } from './StyledDatepicker.styled';
import css from './CustomInput.module.css';
import { useAuth } from '../../../hooks';

const StyledDatepicker = ({ onChange }) => {
  const { user } = useAuth();

  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    const birthdayDate = user.birthday ? parseISO(user.birthday) : null;
    setSelectedDate(birthdayDate);
  }, [user.birthday]);

  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <div onClick={onClick} ref={ref} className={css.container}>
        <div>
          {selectedDate ? format(selectedDate, 'dd.MM.yyyy') : '00.00.0000'}
        </div>
        <div>
          <svg width="20" height="20" className={css.svg}>
            <use href={`${sprite}#icon-calendar-withe`}></use>
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
        dateFormat={'dd.MM.yyyy'}
        calendarStartDay={1}
        showYearDropdown={true}
        yearDropdownItemNumber={3}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
