import SignUpInForm from '../../components/SignUpInForm/SignUpInForm';
import css from './SignUp.module.css';

const SignUp = () => {
  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}>Sign Up</h2>
        <p className={css.text}>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </p>
        <SignUpInForm includeName />
        <p className={css.text2}>
          Don’t have an account?
          <a
            className={css.link}
            href="http://localhost:5173/power-pulse-front-end-react/login"
          >
            {' '}
            Sign In
          </a>
        </p>
      </div>
    </>
  );
};

export default SignUp;
