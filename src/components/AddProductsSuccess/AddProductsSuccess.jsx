import css from './AddProductsSuccess.module.css';
import pic from '../../assets/avocado.svg';
import icons from '../../assets/icons.svg';
import { ButtonModal } from '../ButtonModal/ButtonModal';
import { Link } from 'react-router-dom';

export const AddProductsSuccess = () => {
  return (
    <div className={css.container}>
      <img className={css.pic} src={pic} alt="Well done" />
      <p className={css.welldone}>Well done</p>
      <div className={css.amount_container}>
        <p className={css.text}>
        Calories: <span className={css.amount}>0</span>
        </p>
      </div>

      <div className={css.links}>
        <ButtonModal btnType={'button'} text={'Next exercise'} />
        <Link to={'/'} className={css.link}>
          To the diary
          <svg className={css.svg} >
            <use href={icons + '#icon-arrow-modal'} />
          </svg>
        </Link>
      </div>
    </div>
  );
};
