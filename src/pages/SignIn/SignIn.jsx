import HomeBackground from '../../components/HomeBackground/HomeBackground';
import SignUpInForm from '../../components/SignUpInForm/SignUpInForm';
import Loader from '../../components/Loader';
import css from './SignIn.module.css';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const { isLoading } = useAuth();

  return (
    <section className={`layoutContainer ${css.signin}`}>
      {isLoading && <Loader />}
      <div className={css.container1}>
        <h2 className={css.title}>Sign In</h2>
        <p className={css.text1}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
      </div>

      <SignUpInForm />

      <p className={css.text2}>
        Don’t have an account?
        <Link className={css.link} to="/register">
          {' '}
          Sign Up
        </Link>
      </p>
      <HomeBackground darkPhoto />
    </section>
  );
};

export default SignIn;
