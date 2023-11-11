import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './SignUpInForm.module.css';

const SignUpInForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const SignUpSchema = Yup.object().shape({
    username: Yup.string().required('Name is required'),
    email: Yup.string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  function handleSubmit(values, { resetForm }) {
    dispatch(register(values));

    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignUpSchema}
    >
      <Form className={css.form}>
        <label htmlFor="username">
          <Field
            type="text"
            name="username"
            placeholder="Name"
            className={css.field}
          />
          <ErrorMessage component="div" name="username" />
        </label>

        <label htmlFor="email">
          <Field
            type="text"
            name="email"
            placeholder="Email"
            className={css.field}
          />
          <ErrorMessage component="div" name="email" />
        </label>

        <label htmlFor="password">
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={css.field}
          />
          <ErrorMessage component="div" name="password" />
        </label>

        <button type="submit" className={css.button}>
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpInForm;
