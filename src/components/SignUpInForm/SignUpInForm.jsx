import { useDispatch } from 'react-redux';
import { register, logIn, refreshUser } from '../../redux/auth/operations';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './SignUpInForm.module.css';

const SignUpInForm = ({ includeName }) => {
  const dispatch = useDispatch();

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
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format')
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
    dispatch(refreshUser());
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignUpSchema}
    >
      <Form className={css.container2}>
        <div className={css.form}>
          {includeName && (
            <label htmlFor="username">
              <Field
                type="text"
                name="username"
                placeholder="Name"
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
              className={css.input}
            />
            <ErrorMessage
              component="div"
              name="email"
              className={css.ErrorMessage}
            />
          </label>

          <label htmlFor="password">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={css.input}
            />
            <ErrorMessage
              component="div"
              name="password"
              className={css.ErrorMessage}
            />
          </label>
        </div>

        <button type="submit" className={css.button}>
          {includeName ? 'Sign Up' : 'Sign In'}
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpInForm;
