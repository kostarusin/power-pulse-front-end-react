import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddProduct = () => {
  const valid = Yup.object().shape({
    title: Yup.string().required(),
    weight: Yup.string().required(),
  });
  const initialValues = {
    title: '',
    weight: '',
  };

  function handleSubmit() {}
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={valid}
      >
        <Form>
          <div>
            <label htmlFor="username">
              <div>Basic info</div>
              <Field name="username" type="text" placeholder="Anna Rybachok" />
              <ErrorMessage component="div" name="username" />
            </label>
            <button type="submit">Save</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddProduct;
