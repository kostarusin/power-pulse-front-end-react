import SignUpInForm from '../../components/SignUpInForm/SignUpInForm';
import css from './SignUp.module.css';
import HomeBackground from '../../components/HomeBackground/HomeBackground';
import Loader from '../../components/Loader';
import { useAuth } from '../../hooks/useAuth';

const SignUp = () => {
  const { isLoading } = useAuth();
  return (
    <section className={`layoutContainer ${css.signup}`}>
      {isLoading && <Loader />}
      <div>
        <div className={css.container1}>
          <h2 className={css.title}>Sign Up</h2>
          <p className={css.text1}>
            Thank you for your interest in our platform. To complete the
            registration process, please provide us with the following
            information.
          </p>
        </div>

        <SignUpInForm includeName />

        <p className={css.text2}>
          Already have an account?
          <a className={css.link} href="/login">
            {' '}
            Sign In
          </a>
        </p>
      </div>
      <HomeBackground darkPhoto />
    </section>
  );
};

export default SignUp;
