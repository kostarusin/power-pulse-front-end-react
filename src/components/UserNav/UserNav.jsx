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
        <NavLink
          to="/diary"
          className={({ isActive }) => {
            return isActive ? css.activeNaviLink : css.naviLink;
          }}
        >
          Diary
        </NavLink>
        <NavLink
          to="/exercises"
          className={({ isActive }) => {
            return isActive ? css.activeNaviLink : css.naviLink;
          }}
        >
          Exercises
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => {
            return isActive ? css.activeNaviLink : css.naviLink;
          }}
        >
          Products
        </NavLink>
      </nav>
      <UserBar onBurgerClick={handleToggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
    </>
  );
};

export default UserNav;
