import React from 'react';
import SignUpInForm from '../../components/SignUpInForm/SignUpInForm';
import css from './SignIn.module.css';

const SignIn = () => {
  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}>Sign In</h2>
        <p className={css.text}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
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
      </div>
    </>
  );
};

export default SignIn;
