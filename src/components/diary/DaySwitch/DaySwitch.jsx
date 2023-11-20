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
  additionalIconClass,
}) => {
  const isOpacityLeft = additionalIconClass === 'opacity-left';
  const isOpacityRight = additionalIconClass === 'opacity-right';

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
          style={isOpacityLeft ? { opacity: 0.2 } : null}
        >
          <svg className={css.svg} width="16" height="16">
            <use href={`${sprite}#icon-chevron-left1`}></use>
          </svg>
        </button>
        <button
          type="button"
          onClick={handleToNextDay}
          className={css.arrowRight}
          style={isOpacityRight ? { opacity: 0.2 } : null}
        >
          <svg className={css.svg} width="16" height="16">
            <use href={`${sprite}#icon-chevron-right1`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DaySwitch;
