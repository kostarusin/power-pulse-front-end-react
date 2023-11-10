import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProfileSettingsForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    height: '',
    currentWeight: '',
    desiredWeight: '',
    birthday: '',
  };
  const ProfileSettingsSchema = Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().email('Invalid email address').required('Required'),
    height: Yup.number().min(150, 'Must be at least 150 cm').required(),
    currentWeight: Yup.number().min(35, 'Must be at least 35 kg').required(),
    desiredWeight: Yup.number().min(35, 'Must be at least 35 kg').required(),
    birthday: Yup.date()
      .max(
        new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
        'Must be older than 18 years',
      )
      .required(),
    blood: Yup.number().oneOf([1, 2, 3, 4], 'Invalid blood type').required(),
    sex: Yup.string().oneOf(['male', 'female'], 'Invalid sex').required(),
    levelActivity: Yup.number()
      .oneOf([1, 2, 3, 4, 5], 'Invalid level of activity')
      .required(),
  });
  return (
    <Formik
      initialValues={initialValues}
      // onSubmit={handleSubmit}
      validationSchema={ProfileSettingsSchema}
    >
      <Form>
        <label htmlFor="fullName">
          Basic info
          <Field name="fullName" type="text" placeholder="Anna Rybachok" />
          <ErrorMessage component="div" name="fullName" />
        </label>
        <label>
          <Field
            name="email"
            type="email"
            placeholder="annarybachok@gmail.com"
          />
          <ErrorMessage component="div" name="email" />
        </label>
        <label htmlFor="height">
          Height
          <Field name="height" type="number" placeholder="0" />
          <ErrorMessage component="div" name="height" />
        </label>
        <label htmlFor="currentWeight">
          Current Weight
          <Field name="currentWeight" type="number" placeholder="0" />
          <ErrorMessage component="div" name="currentWeight" />
        </label>
        <label htmlFor="desiredWeight">
          Desired Weight
          <Field name="desiredWeight" type="number" placeholder="0" />
          <ErrorMessage component="div" name="desiredWeight" />
        </label>
        <label htmlFor="birthday">
          <Field name="birthday" type="date" placeholder="00.00.0000" />
          <ErrorMessage component="div" name="birthday" />
        </label>
        <div id="blood-radio-group">Blood</div>
        <div role="group" aria-labelledby="blood-radio-group">
          <label>
            <Field type="radio" name="blood" value="1" />1
          </label>
          <label>
            <Field type="radio" name="blood" value="2" />2
          </label>
          <label>
            <Field type="radio" name="blood" value="3" />3
          </label>
          <label>
            <Field type="radio" name="blood" value="4" />4
          </label>
        </div>
        <div role="group">
          <label>
            <Field type="radio" name="sex" value="male" />
            Male
          </label>
          <label>
            <Field type="radio" name="sex" value="female" />
            Female
          </label>
        </div>
        <div role="group">
          <label>
            <Field type="radio" name="levelActivity" value="1" />
            Sedentary lifestyle (little or no physical activity)
          </label>
          <label>
            <Field type="radio" name="levelActivity" value="2" />
            Light activity (light exercises/sports 1-3 days per week)
          </label>
          <label>
            <Field type="radio" name="levelActivity" value="3" />
            Moderately active (moderate exercises/sports 3-5 days per week)
          </label>
          <label>
            <Field type="radio" name="levelActivity" value="4" />
            Very active (intense exercises/sports 6-7 days per week)
          </label>
          <label>
            <Field type="radio" name="levelActivity" value="5" />
            Extremely active (very strenuous exercises/sports and physical work)
          </label>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default ProfileSettingsForm;
