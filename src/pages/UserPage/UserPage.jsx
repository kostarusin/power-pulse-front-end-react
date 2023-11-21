import { useEffect } from 'react';
import UserForm from '../../components/UserPage/UserForm';
import UserTitle from '../../components/UserPage/UserTitle';
import UserView from '../../components/UserPage/UserView';
import { useDispatch } from 'react-redux';
import { refreshUser, getUserCalories } from '../../redux/auth/operations';

import css from './UserPage.module.css';

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserCalories());
  }, [dispatch]);

  return (
    <div className={css.layoutContainer}>
      <UserTitle />
      <div className={css.container}>
        <UserView />
        <UserForm />
      </div>
    </div>
  );
};

export default UserPage;
