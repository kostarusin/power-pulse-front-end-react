import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

const PublicRoute = ({ component: Component, redirectto = '/user' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectto} /> : <Component />;
};

export default PublicRoute;
