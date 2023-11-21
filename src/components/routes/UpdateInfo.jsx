import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

const UpdateInfo = ({ component: Component, redirectto = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectto} /> : <Component />;
};

export default UpdateInfo;
