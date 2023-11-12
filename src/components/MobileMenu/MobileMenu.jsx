import React from 'react';
import { Link } from 'react-router-dom';
import { MobileMenuBlock, MobileMenuItem, CloseButton, MobileMenuBtn } from './MobileMenu.styled';
import { LogOut } from '../UserBar/UserBar.styled';
import {LogOutSvgMob, LogOutTextMob, LogOutBtn} from './MobileMenu.styled';
import sprite from '../../assets/icons-optimized.svg';

const MobileMenu = ({ isOpen, onClose, onLogout }) => {
  
  return (
    <div>
      <MobileMenuBlock isOpen={isOpen}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <MobileMenuItem as={Link} to="/diary" onClick={onClose}>
          <MobileMenuBtn>Diary</MobileMenuBtn>
        </MobileMenuItem>
        <MobileMenuItem as={Link} to="/exercises" onClick={onClose}>
          <MobileMenuBtn>Exercises</MobileMenuBtn>          
        </MobileMenuItem>
        <MobileMenuItem as={Link} to="/products" onClick={onClose}>
          <MobileMenuBtn>Products</MobileMenuBtn>          
        </MobileMenuItem>
        <LogOutBtn>
          <MobileMenuItem onClick={onLogout}>
            <LogOut to={'/'}>        
              <LogOutTextMob>Logout</LogOutTextMob>
              <LogOutSvgMob>
                <use href={`${sprite}#icon-log-out-white`} />
              </LogOutSvgMob>
            </LogOut>
          </MobileMenuItem>
        </LogOutBtn>
      </MobileMenuBlock>
    </div>
  );
};

export default MobileMenu;

// import React from 'react';
// import { MobileMenuBlock, MobileMenuItem, CloseButton } from './MobileMenu.styled';
// // import sprite from '../../assets/icons-optimized.svg';

// const MobileMenu = ({ isOpen, onClose, onLogout }) => {
//   return (
//     <MobileMenuBlock isOpen={isOpen}>
//       <CloseButton onClick={onClose}>&times;</CloseButton>
//       <MobileMenuItem as="div" onClick={() => console.log('Diary clicked')}>Diary</MobileMenuItem>
//       <MobileMenuItem as="div" onClick={() => console.log('Exercises clicked')}>Exercises</MobileMenuItem>
//       <MobileMenuItem as="div" onClick={() => console.log('Products clicked')}>Products</MobileMenuItem>
//       <MobileMenuItem as="div" onClick={onLogout}>Log Out</MobileMenuItem>
//     </MobileMenuBlock>
//   );
// };

// export default MobileMenu;
