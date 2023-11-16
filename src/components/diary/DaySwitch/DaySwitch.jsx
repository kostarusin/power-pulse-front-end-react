//component
import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';
//stylesheets
import css from './DaySwitch.module.css';

const DaySwitch = ({
  minDate,
  selectedDate,
  setSelectedDate,
  handleToNextDay,
  handleToPreviousDay,
}) => {
  return (
    <div className={css.box}>
      <StyledDatepicker
        minDate={minDate}
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
            <use href="/src/assets/icons-optimized.svg#icon-chevron-left"></use>
          </svg>
        </button>
        <button
          type="button"
          onClick={handleToNextDay}
          className={css.arrowRight}
        >
          <svg width="16" height="16">
            <use href="/src/assets/icons-optimized.svg#icon-chevron-right"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DaySwitch;
