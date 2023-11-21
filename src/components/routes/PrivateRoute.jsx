import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

const PrivateRoute = ({ component: Component }) => {
  const { isLoggedIn, isRefreshing, user } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const UpdateInfoRedirect = isLoggedIn && !user.height;

  if (shouldRedirect) {
    return <Navigate to="/" />;
  } else if (UpdateInfoRedirect) {
    return <Navigate to="/profile" />;
  } else {
    return <Component />;
  }
};

export default PrivateRoute;
