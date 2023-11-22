import HomeBackground from '../../components/HomeBackground/HomeBackground';
import SignUpInForm from '../../components/SignUpInForm/SignUpInForm';
import Loader from '../../components/Loader';
import css from './SignIn.module.css';
import { useAuth } from '../../hooks/useAuth';

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
        <a
          className={css.link}
          href="http://localhost:5173/power-pulse-front-end-react/register"
        >
          {' '}
          Sign Up
        </a>
      </p>
      <HomeBackground darkPhoto />
    </section>
  );
};

export default SignIn;
