import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectCalories,
  selectIsLoading,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const colories = useSelector(selectCalories);
  const isLoading = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    colories,
    isLoading,
  };
};
