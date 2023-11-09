import { Navigate } from 'react-router-dom';
// import { useAuth } from "../../hooks";

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn } = true;

  return isLoggedIn ? <Navigate to={redirectTo} /> : <>{component}</>;
};

export default RestrictedRoute;
