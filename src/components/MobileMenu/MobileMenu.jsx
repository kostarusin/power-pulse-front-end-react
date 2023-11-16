import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './MobileMenu.module.css';
import { logOut } from '../../redux/auth/operations';
import sprite from '../../assets/icons-optimized.svg';

const MobileMenu = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains(css.backdrop)) {
      onClose();
    }
  };

  const handleLinkClick = (path) => {
    navigate(path);
    onClose();
  };

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div
      className={`${css.backdrop} ${isOpen ? css.backdropVisible : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={css.mobileMenuWrap}>
        <div className={css.xButton} onClick={onClose}>
          &times;
        </div>
        <div className={css.userNaviWrap}>
          <p className={css.mobMenuItemUpper} onClick={() => handleLinkClick('/diary')}>
            Diary
          </p>
          <p className={css.mobMenuItem} onClick={() => handleLinkClick('/exercises')}>
            Exercises
          </p>
          <p className={css.mobMenuItem} onClick={() => handleLinkClick('/products')}>
            Products
          </p>
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

// import { Link } from 'react-router-dom';
// import css from './MobileMenu.module.css';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../../redux/auth/operations';
// import sprite from '../../assets/icons-optimized.svg';

// const MobileMenu = ({ isOpen, onClose }) => {
//   const dispatch = useDispatch();

//   const handleBackdropClick = (e) => {
//     if (e.target.classList.contains(css.backdrop)) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       className={`${css.backdrop} ${isOpen ? css.backdropVisible : ''}`}
//       onClick={handleBackdropClick}
//     >
//       <div className={css.mobileMenuWrap}>
//         <div className={css.xButton} onClick={onClose}>
//           &times;
//         </div>
//         <div className={css.userNaviWrap}>
//           <Link className={css.mobMenuItemUpper} onClick={onClose} to="/diary">
//             Diary
//           </Link>
//           <Link className={css.mobMenuItem} onClick={onClose} to="/exercises">
//             Exercises
//           </Link>
//           <Link className={css.mobMenuItem} onClick={onClose} to="/products">
//             Products
//           </Link>
//         </div>
//         <div className={css.logoutWrap}>
//           <Link className={css.logoutLink} onClick={() => dispatch(logOut())}>
//             <p className={css.logoutText}>Logout</p>
//             <svg className={css.logoutIcon}>
//               <use href={`${sprite}#icon-log-out-white`} />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;