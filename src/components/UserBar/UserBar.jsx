import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import css from './UserBar.module.css';
import sprite from '../../assets/icons-optimized.svg';
import { useAuth } from '../../hooks';

const UserBar = ({ onBurgerClick }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { avatarURL } = user;

  return (
    <div className={css.userBarWrap}>
      <Link className={css.profileLink} to="/profile">
        <svg className={css.settingsIcon}>
          <use href={`${sprite}#icon-settings`} />
        </svg>
      </Link>
      <div className={css.avatar}>
        {avatarURL ? (
          <img src={user.avatarURL} className={css.avatar} />
        ) : (
          <svg className={css.avatarIcon}>
            <use href={`${sprite}#icon-user`} />
          </svg>
        )}
      </div>
      <svg className={css.burger} onClick={onBurgerClick}>
        <use href={`${sprite}#icon-burger-menu`} />
      </svg>
      <Link
        className={css.logout}
        onClick={async () => {
          await dispatch(logOut());
          window.location.reload();
        }}
      >
        <p className={css.logoutText}>Logout</p>
        <svg className={css.logoutIcon}>
          <use href={`${sprite}#icon-log-out`} />
        </svg>
      </Link>
    </div>
  );
};

export default UserBar;
