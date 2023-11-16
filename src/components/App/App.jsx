import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';

//SharedLayout
import SharedLayout from './SharedLayout';

//routes
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';

//components
const HomePage = lazy(() => import('../../pages/Home/Home'));
const DiarysPage = lazy(() => import('../../pages/Diary/Diary'));
const ExercisesPage = lazy(() => import('../../pages/Exercises/Exercises'));
const ProductsPage = lazy(() => import('../../pages/Products/Products'));
const SignInPage = lazy(() => import('../../pages/SignIn/SignIn'));
const SignUpPage = lazy(() => import('../../pages/SignUp/SignUp'));
const UserPage = lazy(() => import('../../pages/UserPage/UserPage'));
const ErrorPage = lazy(() => import('../../pages/Error/Error'));

function App() {
  const dispatch = useDispatch();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace(/\//g, '-');


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="login"
            element={<PublicRoute redirectto="/diary" component={SignInPage} />}
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectto="/profile" component={SignUpPage} />
            }
          />
          <Route
            path="diary/"
            element={<PrivateRoute redirectto={`/diary/${formattedDate}`} component={DiarysPage} />}
          />
          <Route
            path="diary/:date"
            element={<PrivateRoute component={DiarysPage} />}
          />
          <Route
            path="profile"
            element={<PrivateRoute redirectto="/" component={UserPage} />}
          />
          <Route
            path="products"
            element={<PrivateRoute redirectto="/" component={ProductsPage} />}
          />
          <Route
            path="exercises"
            element={<PrivateRoute redirectto="/" component={ExercisesPage} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
