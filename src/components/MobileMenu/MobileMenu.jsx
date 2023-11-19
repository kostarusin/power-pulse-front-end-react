import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './MobileMenu.module.css';
import { logOut } from '../../redux/auth/operations';
import sprite from '../../assets/icons-optimized.svg';

const MobileMenu = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains(css.backdrop)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div
      className={`${css.backdrop} ${isOpen ? css.backdropVisible : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={css.mobileMenuWrap}>
        <div className={css.userNaviWrap}>
          <button className={css.xButton} onClick={onClose}>
            &times;
          </button>
          <nav className={css.userNaviWrap}>
            <NavLink
              to="/diary"
              className={({ isActive }) => {
                return isActive
                  ? css.mobMenuItemUpperActive
                  : css.mobMenuItemUpper;
              }}
              onClick={onClose}
            >
              Diary
            </NavLink>
            <NavLink
              to="/exercises"
              className={({ isActive }) => {
                return isActive ? css.mobMenuItemActiv : css.mobMenuItem;
              }}
              onClick={onClose}
            >
              Exercises
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => {
                return isActive ? css.mobMenuItemActiv : css.mobMenuItem;
              }}
              onClick={onClose}
            >
              Products
            </NavLink>
          </nav>
        </div>
        <div className={css.logoutWrap}>
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
