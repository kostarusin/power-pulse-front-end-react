import ProfileSettingsForm from '../../components/UserPage/ProfileSettingsForm';
import UserTitle from '../../components/UserPage/UserTitle';
import UserView from '../../components/UserPage/UserView';

import css from './UserPage.module.css';

const UserPage = () => {
  return (
    <>
      <UserTitle />
      <div className={css.container}>
        <UserView />
        <ProfileSettingsForm />
      </div>
    </>
  );
};

export default UserPage;
