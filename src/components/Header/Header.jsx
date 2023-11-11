//components
import React from 'react';
import Logo from "../Logo/Logo";
import UserNav from "../UserNav/UserNav";
import UserBar from "../UserBar/UserBar";


const Header = () => {
  return (
    <header>
      <Logo/>
      <UserNav/>
      <UserBar/>
    </header>
  );
};

export default Header;
