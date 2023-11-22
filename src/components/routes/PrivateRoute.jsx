import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastIconError from '../../components/toastComponents/ToastIconError';
import CloseBtn from '../../components/toastComponents/CloseBtn';
import css from '../../components/toastComponents/ToastIconError/ToastIconError.module.css';

const PrivateRoute = ({ component: Component }) => {
  const { isLoggedIn, isRefreshing, user } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const UpdateInfoRedirect = isLoggedIn && !user.height;

  if (shouldRedirect) {
    return <Navigate to="/" />;
  } else if (UpdateInfoRedirect) {
    toast.info('Fill out your profile!', {
      position: 'top-center',
      className: css.customToastError,
      progressClassName: css.toastProgressBar,
      icon: ToastIconError,
      closeButton: CloseBtn,
      toastId: 'registerErrorToast',
    });
    return <Navigate to="/profile" />;
  } else {
    return <Component />;
  }
};

export default PrivateRoute;
