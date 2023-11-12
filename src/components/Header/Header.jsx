import Logo from '../Logo/Logo';
import { HeaderBar, LogoWrap, User } from './Header.styled';
import UserNav from 'components/UserNav/UserNav';
import UserBar from 'components/UserBar/UserBar';
import { useAuth } from '../../redux/hooks';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderBar>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <User>
        {isLoggedIn && <UserNav />}
        {isLoggedIn && <UserBar />}
      </User>
    </HeaderBar>
  );
};

export default Header;
