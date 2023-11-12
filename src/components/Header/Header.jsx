import Logo from '../Logo/Logo';
import { HeaderBar, LogoWrap, User } from './Header.styled';
import UserNav from 'components/UserNav/UserNav';
import { useAuth } from '../../redux/hooks';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderBar>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <User>
        <UserNav/>
        <UserBar/>
      </User>
      <User>{isLoggedIn && <UserNav />}</User>
    </HeaderBar>
  );
};

export default Header;
