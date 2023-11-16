import UserForm from '../../components/UserPage/UserForm';
import UserTitle from '../../components/UserPage/UserTitle';
import UserView from '../../components/UserPage/UserView';

import css from './UserPage.module.css';

const UserPage = () => {
  return (
    <>
      <UserTitle />
      <div className={css.container}>
        <UserView />
        <UserForm />
      </div>
    </>
  );
};

export default UserPage;
