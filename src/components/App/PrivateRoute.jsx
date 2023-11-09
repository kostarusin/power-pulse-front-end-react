import { Navigate } from 'react-router-dom';
// import { useAuth } from "../../hooks";

const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn } = true;
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <>{component}</>;
};

export default PrivateRoute;
