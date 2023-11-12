import { Navigate } from 'react-router-dom';
import { useAuth } from '../../redux/hooks';

const PublicRoute = ({ component: Component, redirectto = '/user' }) => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return isLoggedIn ? <Navigate to={redirectto} /> : <Component />;
};

export default PublicRoute;
