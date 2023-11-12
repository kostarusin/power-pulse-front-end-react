import { UserNavBlock, UserNavLink } from './UserNav.styled';

const UserNav = () => {
  return (
    <UserNavBlock>
      <UserNavLink to="/diary">Diary</UserNavLink>
      <UserNavLink to="/exercises">Exercises</UserNavLink>
      <UserNavLink to="/products">Products</UserNavLink>
    </UserNavBlock>
  );
};

export default UserNav;