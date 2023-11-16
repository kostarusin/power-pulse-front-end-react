import SignUpInForm from '../../components/SignUpInForm/SignUpInForm';
import css from './SignIn.module.css';
import HomeBackground from '../../components/HomeBackground/HomeBackground';

const SignIn = () => {
  return (
    <section className={css.signin }>
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
