import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from './UserNav.module.css';

const UserNav = () => {
  return (
    <div>
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/exercises">Exercises</NavLink>
    </div>
  );
};

export default UserNav;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styles from './UserNav.module.css';

// const UserNav = () => {
//   return (
//     <nav className={styles.nav}>
//       <ul>
//         <li><NavLink className={styles.link} to="/user" activeClassName={styles.active}>User Page</NavLink></li>
//         <li><NavLink className={styles.link} to="/diary" activeClassName={styles.active}>Diary</NavLink></li>
//         <li><NavLink className={styles.link} to="/products" activeClassName={styles.active}>Products</NavLink></li>
//         <li><NavLink className={styles.link} to="/exercises" activeClassName={styles.active}>Exercises</NavLink></li>
//       </ul>
//     </nav>

//   );
// };

// export default UserNav;


