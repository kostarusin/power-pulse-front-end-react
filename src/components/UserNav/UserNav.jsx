import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';
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
    <>
      <nav className={css.nav}>
        <NavLink className={css.naviLink} to="/diary">
          Diary
        </NavLink>
        <NavLink className={css.naviLink} to="/exercises">
          Exercises
        </NavLink>
        <NavLink className={css.naviLink} to="/products">
          Products
        </NavLink>
      </nav>
      <UserBar onBurgerClick={handleToggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
    </>
  );
};

export default UserNav;
