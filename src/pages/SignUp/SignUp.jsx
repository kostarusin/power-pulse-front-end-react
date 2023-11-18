import SignUpInForm from '../../components/SignUpInForm/SignUpInForm';
import css from './SignUp.module.css';
import HomeBackground from '../../components/HomeBackground/HomeBackground';

const SignUp = () => {
  return (
    <section className={`layoutContainer ${css.signup}`}>
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
          <a
            className={css.link}
            href="http://localhost:5173/power-pulse-front-end-react/login"
          >
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
