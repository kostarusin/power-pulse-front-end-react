import Logo from '../Logo/Logo';
import { HeaderBar, LogoWrap, User } from './Header.styled';
import UserNav from 'components/UserNav/UserNav';
import UserBar from 'components/UserBar/UserBar';

const Header = () => {
  return (
    <HeaderBar>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <User>
        <UserNav />
        <UserBar />
      </User>
      
    </HeaderBar>
  );
};

export default Header;