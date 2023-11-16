import Logo from '../../Logo/Logo';
import css from './Header.module.css';
import UserNav from '../UserNav/UserNav';
import { useAuth } from '../../../redux/hooks';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <div className={css.logoWrap}>
        <Logo />
      </div>
      <div className={css.user}>{isLoggedIn && <UserNav />}</div>
    </header>
  );
};

export default Header;
