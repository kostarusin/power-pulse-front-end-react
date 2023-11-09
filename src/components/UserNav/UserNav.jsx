import { NavLink } from 'react-router-dom';

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
