import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import User from '../../pages/User';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <User />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;


blood - number; allowed values 1, 2, 3, 4; required
sex - string; allowed values "male", "female"; required
levelActivity - number; allowed values 1, 2, 3, 4, 5; required
