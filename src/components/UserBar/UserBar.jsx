import React from 'react';
import {
  IconSettings,
  IconUserAvatar,
  UserAvatar,
  UserBarBlock,
  UserBarLink,
  Burger,
  LogOut, 
  LogOutText,
  LogOutSvg
} from './UserBar.styled';

import sprite from '../../assets/icons-optimized.svg';
// import MobileMenu from '../MobileMenu/MobileMenu.jsx';

const UserBar = ({ onBurgerClick }) => {
  
  return (
    <UserBarBlock>
      <UserBarLink to="/profile">
        <IconSettings>
          <use href={`${sprite}#icon-settings`} />
        </IconSettings>
      </UserBarLink>
      <UserAvatar>
        <IconUserAvatar>
          <use href={`${sprite}#icon-user`} />
        </IconUserAvatar>
      </UserAvatar>
      <Burger onClick={onBurgerClick}>
        <use href={`${sprite}#icon-burger-menu`} />
      </Burger>
      <LogOut to={'/'}>
        <LogOutText>Logout</LogOutText>
        <LogOutSvg>
          <use href={`${sprite}#icon-log-out`} />
        </LogOutSvg>
      </LogOut>
    </UserBarBlock>
  );
};

export default UserBar;