import { useEffect } from 'react';
import UserForm from '../../components/UserPage/UserForm';
import UserTitle from '../../components/UserPage/UserTitle';
import UserView from '../../components/UserPage/UserView';
import Loader from '../../components/Loader/index';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

import css from './UserPage.module.css';

const UserPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={css.layoutContainer}>
      {isLoading && <Loader />}
      <UserTitle />
      <div className={css.container}>
        <UserView />
        <UserForm />
      </div>
    </div>
  );
};

export default UserPage;
