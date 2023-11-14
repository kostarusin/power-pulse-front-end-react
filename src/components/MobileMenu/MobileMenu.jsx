import { Link } from 'react-router-dom';
import css from './MobileMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import sprite from '../../assets/icons-optimized.svg';

const MobileMenu = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  return (
    <div className={`${css.backdrop} ${isOpen ? css.backdropVisible : ''}`}>
      <div className={css.mobileMenuWrap}>
        <div className={css.xButton} onClick={onClose}>
          &times;
        </div>
        <div className={css.userNaviWrap}>
          <Link className={css.mobMenuItem} onClick={onClose} to="/diary">
            Diary
          </Link>
          <Link className={css.mobMenuItem} onClick={onClose} to="/exercises">
            Exercises
          </Link>
          <Link className={css.mobMenuItem} onClick={onClose} to="/products">
            Products
          </Link>
        </div>
        <div className={css.logoutWrap} onClick={onClose}>
          <Link className={css.logoutLink} onClick={() => dispatch(logOut())}>
            <p className={css.logoutText}>Logout</p>
            <svg className={css.logoutIcon}>
              <use href={`${sprite}#icon-log-out-white`} />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
