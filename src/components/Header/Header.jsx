import Logo from '../Logo/Logo';
import css from './Header.module.css';
import UserNav from '../UserNav/UserNav';
import { useAuth } from '../../hooks';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div
      className={isLoggedIn ? css.stickyBottomLine : css.stickyBottomLineNone}
    >
      <div className="layoutContainer">
        <header className={css.header}>
          <div className={css.logoWrap}>
            <Logo />
          </div>
          <div className={css.user}>{isLoggedIn && <UserNav />}</div>
        </header>
      </div>
    </div>
  );
};

export default Header;
