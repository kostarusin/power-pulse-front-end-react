import * as Yup from 'yup';

const ProfileSettingsSchema = Yup.object().shape({
  username: Yup.string().required('User Name is a required field'),
  height: Yup.number()
    .min(150, 'Must be at least 150 cm')
    .required('Height is a required field')
    .max(300, 'Must be at most 300 cm'),
  currentWeight: Yup.number()
    .min(35, 'Must be at least 35 kg')
    .required('Current weight is a required field')
    .max(200, 'currentWeight" should be maximum 200'),
  desiredWeight: Yup.number()
    .min(35, 'Must be at least 35 kg')
    .required('Desired weight is a required field')
    .max(200, 'desiredWeight" should be maximum 200'),
  birthday: Yup.date()
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      'Must be older than 18 years',
    )
    .required('Birthday is a required field'),
  blood: Yup.number()
    .oneOf([1, 2, 3, 4], 'Invalid blood type')
    .required('This field is required'),
  sex: Yup.string()
    .oneOf(['male', 'female'], 'Invalid sex')
    .required('This field is required'),
  levelActivity: Yup.number()
    .oneOf([1, 2, 3, 4, 5], 'Invalid level of activity')
    .required('This field is required'),
});

export default ProfileSettingsSchema;
