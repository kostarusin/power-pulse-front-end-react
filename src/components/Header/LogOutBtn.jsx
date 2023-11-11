import React from 'react';
import styles from './Header.module.css';

const LogOutBtn = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <button className={styles.logout-btn} onClick={handleLogout}>
      Logout <svg width="20" height="20"><use href="/assets/icons-optimized.svg#icon-log-out"></use></svg>
    </button>
  );
};

export default LogOutBtn;