import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

const PrivateRoute = ({ component: Component, redirectto = '/' }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectto} /> : <Component />;
};

export default PrivateRoute;
