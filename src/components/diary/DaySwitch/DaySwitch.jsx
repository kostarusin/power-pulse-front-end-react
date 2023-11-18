//component
import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';
//stylesheets

import sprite from '../../../assets/icons-optimized.svg';
import css from './DaySwitch.module.css';

const DaySwitch = ({
  minDate,
  maxDate,
  selectedDate,
  setSelectedDate,
  handleToNextDay,
  handleToPreviousDay,
}) => {
  return (
    <div className={css.box}>
      <StyledDatepicker
        minDate={minDate}
        maxDate={maxDate}
        selectedDate={selectedDate}
        onChange={setSelectedDate}
      />
      <div>
        <button
          type="button"
          className={css.arrowLeft}
          onClick={handleToPreviousDay}
        >
          <svg width="16" height="16">
            <use href={`${sprite}#icon-chevron-left`}></use>
          </svg>
        </button>
        <button
          type="button"
          onClick={handleToNextDay}
          className={css.arrowRight}
        >
          <svg width="16" height="16">
            <use href={`${sprite}#icon-chevron-right`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DaySwitch;
