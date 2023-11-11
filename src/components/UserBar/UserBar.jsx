import React from 'react';
// import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import LogOutBtn from '../Header/LogOutBtn';
import styles from './UserBar.module.css';

const UserBar = () => {
  return (
    <div>
      <div><button className={styles.settings-btn}>
        <svg width="28" height="28"><use href="/assets/icons-optimized.svg#icon-settings"></use></svg>
        </button>
      </div>
      <div>PROFILE</div>
      <div onClick={LogOutBtn}>LOGOUT</div>
    </div>
  );
};

export default UserBar;
