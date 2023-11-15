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
    <div>
      <StyledDatepicker
        minDate={minDate}
        selectedDate={selectedDate}
        onChange={setSelectedDate}
      />
      <button
        type="button"
        className={css.arrowLeft}
        onClick={handleToPreviousDay}
      >
        svl
      </button>
      <button type="button" onClick={handleToNextDay}>
        svr
      </button>
    </div>
  );
};

export default DaySwitch;
