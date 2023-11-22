import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register, logIn } from '../../redux/auth/operations';
import sprite from '../../assets/icons-optimized.svg';
import { useState } from 'react';
import { getStatistics } from '../../redux/statistics/operations';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './SignUpInForm.module.css';

const SignUpInForm = ({ includeName }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  const initialValues = {
    ...(includeName && { username: '' }),
    email: '',
    password: '',
  };

  const SignUpSchema = Yup.object().shape({
    ...(includeName && {
      username: Yup.string().required('Name is required'),
    }),
    email: Yup.string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Error email')
      .required('Email is required'),

    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  function handleSubmit(values, { resetForm }) {
    if (includeName) {
      dispatch(register(values));
    } else {
      dispatch(logIn(values));
    }
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignUpSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.container2}>
          <div className={css.form}>
            {includeName && (
              <label htmlFor="username">
                <Field
                  type="text"
                  name="username"
                  placeholder="Name"
                  autoComplete="off"
                  className={css.input}
                />
                <ErrorMessage
                  component="div"
                  name="username"
                  className={css.ErrorMessage}
                />
              </label>
            )}
            <label htmlFor="email">
              <Field
                type="text"
                name="email"
                placeholder="Email"
                autoComplete="off"
                className={
                  css.input +
                  (touched.email
                    ? errors.email
                      ? ' ' + css.inputError
                      : ' ' + css.inputSuccess
                    : '')
                }
              />

              <div className={css.ErrorMessage}>
                {errors.email && touched.email && (
                  <svg width="16" height="16" className={css.svg}>
                    <use href={`${sprite}#icon-validation-checkbox-red`}></use>
                  </svg>
                )}

                <ErrorMessage component="div" name="email" />
              </div>

              {!errors.email && touched.email && (
                <div className={css.successMessage}>
                  <svg width="16" height="16">
                    <use
                      href={`${sprite}#icon-validation-checkbox-green`}
                    ></use>
                  </svg>
                  Success email!
                </div>
              )}
            </label>

            <label htmlFor="password">
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                autoComplete="off"
                className={
                  css.input +
                  (touched.password
                    ? errors.password
                      ? ' ' + css.inputError
                      : ' ' + css.inputSuccess
                    : '')
                }
              />
              <div className={css.ErrorMessage}>
                {errors.password && touched.password && (
                  <svg width="16" height="16">
                    <use href={`${sprite}#icon-validation-checkbox-red`}></use>
                  </svg>
                )}

                <ErrorMessage component="div" name="password" />
              </div>

              {!errors.password && touched.password && (
                <div className={css.successMessage}>
                  <svg width="16" height="16">
                    <use
                      href={`${sprite}#icon-validation-checkbox-green`}
                    ></use>
                  </svg>
                  Success password!
                </div>
              )}
            </label>
            <div className={css.buttonEye} onClick={togglePasswordVisibility}>
              {showPassword ? (
                <svg className={css.eye}>
                  <use href={sprite + '#icon-eye-off'} />
                </svg>
              ) : (
                <svg className={css.eye}>
                  <use href={sprite + '#icon-eye'} />
                </svg>
              )}
            </div>
          </div>

          <button type="submit" className={css.button}>
            {includeName ? 'Sign Up' : 'Sign In'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpInForm;
