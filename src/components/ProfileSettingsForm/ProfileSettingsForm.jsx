
import { Formik, Form, Field, ErrorMessage} from "formik";
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
  height: Yup.number().min(150, 'Must be at least 150 cm').required(),
  currentWeight: Yup.number().min(35, 'Must be at least 35 kg').required(),
  desiredWeight: Yup.number().min(35, 'Must be at least 35 kg').required(),
  birthday: Yup.date()
    .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'Must be older than 18 years')
    .required()
  // blood: Yup.number().oneOf([1, 2, 3, 4], 'Invalid blood type').required(),
  // sex: Yup.string().oneOf(['male', 'female'], 'Invalid sex').required(),
  // levelActivity: Yup.number().oneOf([1, 2, 3, 4, 5], 'Invalid level of activity').required(),
});
 return ( <Formik
      initialValues={initialValues}
      // onSubmit={handleSubmit}
      validationSchema={ProfileSettingsSchema}
    >
      <Form>
        <label htmlFor="fullName">Basic info
      <Field
        id="fullName"
        name="fullName"
        type="text"
        placeholder='Anna Rybachok'
      />
      <Field
        id="email"
        name="email"
        type="email"
        placeholder='annarybachok@gmail.com'
      />
      <ErrorMessage component="div" name="fullName"/>
      <ErrorMessage component="div" name="email"/>
      </label>
      <label htmlFor="height">Height
      <Field
        id="height"
        name="height"
        type="number"
        placeholder='0'
      />
      <ErrorMessage component="div" name="height"/>
      </label>
      <label htmlFor="currentWeight">Current Weight
      <Field
        id="currentWeight"
        name="currentWeight"
        type="number"
        placeholder='0'
      />
      <ErrorMessage component="div" name="currentWeight"/>
      </label>
      <label htmlFor="desiredWeight">Desired Weight
      <Field
        id="desiredWeight"
        name="desiredWeight"
        type="number"
        placeholder='0'
      />
      <ErrorMessage component="div" name="desiredWeight"/>
      </label>
      <Field
        id="birthday"
        name="birthday"
        type="date"
        placeholder='00.00.0000'
      />
       <ErrorMessage component="div" name="birthday"/>
      <button type="submit">Submit</button>
      </Form>
    </Formik>)

};
export default ProfileSettingsForm;
