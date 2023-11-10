import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

//SharedLayout
import SharedLayout from './SharedLayout';

//red
// import RestrictedRoute from './RestrictedRoute';
// import PrivateRoute from './PrivateRoute';

//components
const HomePage = lazy(() => import('../../pages/Home/Home'));
const DiarysPage = lazy(() => import('../../pages/Diary/Diary'));
const ExercisesPage = lazy(() => import('../../pages/Exercises/Exercises'));
const ProductsPage = lazy(() => import('../../pages/Products/Products'));
const SignInPage = lazy(() => import('../../pages/SignIn/SignIn'));
const SignUpPage = lazy(() => import('../../pages/SignUp/SignUp'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/diary" element={<DiarysPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
