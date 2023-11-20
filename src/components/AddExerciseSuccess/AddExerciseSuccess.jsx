import css from './AddExerciseSuccess.module.css';
import pic from '../../assets/thumb_up.png';
import icons from '../../assets/icons.svg';
import { ButtonModal } from '../ButtonModal/ButtonModal';
import { Link } from 'react-router-dom';

export const AddExerciseSuccess = ({ exercise, toggleSuccessModal, location }) => {

  return (
    <div className={css.container}>
      <img className={css.pic} src={pic} alt="Well done" />
      <p className={css.welldone}>Well done</p>
      <div className={css.amount_container}>
        <p className={css.text}>
          Your time: <span className={css.amount}>{exercise.time}</span>
        </p>
        <p className={css.text}>
          Burned calories:{' '}
          <span className={css.amount}>{exercise.calories}</span>
        </p>
      </div>

      <div className={css.links}>
        <ButtonModal btnType={'button'} onClick={toggleSuccessModal} text={'Next exercise'} />
        <Link to={location.state?.from ?? '/diary'} className={css.link}>
          To the diary
          <svg className={css.svg}>
            <use href={icons + '#icon-arrow-modal'} />
          </svg>
        </Link>
      </div>
    </div>
  );
};
