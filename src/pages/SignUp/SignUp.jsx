import React from 'react';
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
        <SignUpInForm />
      </div>
    </>
  );
};

export default SignUp;
