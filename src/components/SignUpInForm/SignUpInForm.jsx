import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './SignUpInForm.module.css';

const SignUpInForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  //   const SignUpSchema = Yup.object().shape({
  //     name: Yup.string().required(),
  //     email: Yup.string().email('Invalid email').required('Required'),
  //     password: Yup.string().email('Invalid password').required('Required'),
  //   });

  return (
    <Formik
      initialValues={initialValues}
      //   onSubmit={handleSubmit}
      //   validationSchema={SignUpSchema}
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
