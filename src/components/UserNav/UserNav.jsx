import { useState } from 'react';
import { UserNavBlock, UserNavLink } from './UserNav.styled';
import MobileMenu from '../MobileMenu/MobileMenu';
import UserBar from '../UserBar/UserBar';

const UserNav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <UserNavBlock>
      <UserNavLink to="/diary">Diary</UserNavLink>
      <UserNavLink to="/exercises">Exercises</UserNavLink>
      <UserNavLink to="/products">Products</UserNavLink>
      <UserBar onBurgerClick={handleToggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
    </UserNavBlock>
  );
};

export default UserNav;
