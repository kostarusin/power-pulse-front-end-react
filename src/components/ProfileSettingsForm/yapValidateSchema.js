import * as Yup from 'yup';

const ProfileSettingsSchema = Yup.object().shape({
  fullName: Yup.string().required(),
  email: Yup.string().email('Invalid email address').required(),
  height: Yup.number().min(150, 'Must be at least 150 cm').required(),
  currentWeight: Yup.number().min(35, 'Must be at least 35 kg').required(),
  desiredWeight: Yup.number().min(35, 'Must be at least 35 kg').required(),
  birthday: Yup.date()
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      'Must be older than 18 years',
    )
    .required('This field is required'),
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