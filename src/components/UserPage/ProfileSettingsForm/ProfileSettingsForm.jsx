import { Formik, Form, Field, ErrorMessage } from 'formik';
import ProfileSettingsSchema from './yapValidateSchema';
//redux
import { useDispatch } from 'react-redux';
import { updateInfo } from '../../../redux/auth/operations';
import { useAuth } from '../../../redux/hooks';
//datepicker

//styles
import css from './ProfileSettingsForm.module.css';
import { useEffect, useMemo, useState } from 'react';

const ProfileSettingsForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  // const isFormDataMatchingBackend = useMemo(() => {
  //   return (
  //     user.username === values.username &&
  //     user.email === values.email &&
  //     user.height === values.height &&
  //     user.currentWeight === values.currentWeight &&
  //     user.desiredWeight === values.desiredWeight &&
  //     user.birthday === values.birthday &&
  //     user.blood === values.blood &&
  //     user.sex === values.sex &&
  //     user.levelActivity === values.levelActivity
  //   );
  // }, [user]);
  // useEffect(() => {
  //   const isFormDataChanged = Object.keys(initialValues).some(
  //     (key) => initialValues[key] !== user[key],
  //   );
  //   setIsFormChanged(isFormDataChanged);
  // }, [user]);

  const handleSubmit = (values, { resetForm }) => {
    const updatedValues = { ...values };
    delete updatedValues.email;
    dispatch(updateInfo(updatedValues));
    resetForm();
  };

  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleInputChange = (formik, event) => {
    formik.handleChange(event);

    const currentFormValues = formik.values;
    const isFormDataChanged = user.height === currentFormValues.height;
    console.log('currentFormValues.height', currentFormValues.height);
    // console.log('user.height', user.height);
    // console.log('isFormDataChanged', isFormDataChanged);

    setIsFormChanged(isFormDataChanged);
  };

  const initialValues = {
    username: user.username,
    email: user.email,
    height: '',
    currentWeight: '',
    desiredWeight: '',
    birthday: '',
    blood: '',
    sex: '',
    levelActivity: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ProfileSettingsSchema}
    >
      {(formik) => (
        <Form className={css.formContainer}>
          <div className={css.basicInfoContainer}>
            <label htmlFor="username" className={css.fieldWithError}>
              <div className={css.setName}>Basic info</div>
              <Field
                className={css.basicInfoInput}
                name="username"
                type="text"
                onChange={(event) => handleInputChange(formik, event)}
                placeholder="Anna Rybachok"
              />
              <ErrorMessage
                component="div"
                name="username"
                className={css.ErrorMessage}
              />
            </label>
            <label htmlFor="email" className={css.fieldWithError}>
              <Field
                className={css.basicInfoInput}
                name="email"
                type="email"
                placeholder="annarybachok@gmail.com"
                readOnly
              />
              <ErrorMessage
                component="div"
                name="email"
                className={css.ErrorMessage}
              />
            </label>
          </div>
          <div className={css.secondaryInfoContainer}>
            <div className={css.flexContainer}>
              <label htmlFor="height" className={css.secondaryInfoLabel}>
                <span className={css.setName}>Height</span>
                <Field
                  className={css.infoInput}
                  name="height"
                  type="number"
                  onChange={(event) => handleInputChange(formik, event)}
                  placeholder="0"
                />
                <ErrorMessage
                  component="div"
                  name="height"
                  // className={css.ErrorMessage}
                />
              </label>
              <label htmlFor="currentWeight" className={css.secondaryInfoLabel}>
                <span className={css.setName}>Current Weight</span>
                <Field
                  className={css.infoInput}
                  name="currentWeight"
                  type="number"
                  onChange={(event) => handleInputChange(formik, event)}
                  placeholder="0"
                />
                <ErrorMessage
                  component="div"
                  name="currentWeight"
                  className={css.ErrorMessage}
                />
              </label>
            </div>
            <div className={css.flexContainer}>
              <label htmlFor="desiredWeight" className={css.secondaryInfoLabel}>
                <span className={css.setName}>Desired Weight</span>
                <Field
                  className={css.infoInput}
                  name="desiredWeight"
                  type="number"
                  onChange={(event) => handleInputChange(formik, event)}
                  placeholder="0"
                />
                <ErrorMessage
                  component="div"
                  name="desiredWeight"
                  className={css.ErrorMessage}
                />
              </label>
              <label htmlFor="birthday" className={css.fieldWithError}>
                <Field
                  className={css.infoInput}
                  name="birthday"
                  type="date"
                  onChange={(event) => handleInputChange(formik, event)}
                  placeholder="00.00.0000"
                />
                <ErrorMessage
                  component="div"
                  name="birthday"
                  className={css.ErrorMessage}
                />
              </label>
            </div>
          </div>
          <div id="blood-radio-group" className={css.setName}>
            Blood
          </div>
          <div className={css.bloodSexGroup}>
            <div
              role="group"
              aria-labelledby="blood-radio-group"
              className={css.radioGroup}
            >
              <label className={css.radioBtnLabel}>
                <Field
                  className={css.radioBtn}
                  type="radio"
                  name="blood"
                  onChange={(event) => handleInputChange(formik, event)}
                  value="1"
                />
                <span className={css.customRadioBtn}></span>1
              </label>
              <label className={css.radioBtnLabel}>
                <Field
                  className={css.radioBtn}
                  type="radio"
                  name="blood"
                  onChange={(event) => handleInputChange(formik, event)}
                  value="2"
                />
                <span className={css.customRadioBtn}></span>2
              </label>
              <label className={css.radioBtnLabel}>
                <Field
                  className={css.radioBtn}
                  type="radio"
                  name="blood"
                  onChange={(event) => handleInputChange(formik, event)}
                  value="3"
                />
                <span className={css.customRadioBtn}></span>3
              </label>
              <label className={css.radioBtnLabel}>
                <Field
                  className={css.radioBtn}
                  type="radio"
                  name="blood"
                  onChange={(event) => handleInputChange(formik, event)}
                  value="4"
                />
                <span className={css.customRadioBtn}></span>4
              </label>
            </div>
            <div role="group" className={css.radioGroup}>
              <label className={css.radioBtnLabel}>
                <Field
                  className={css.radioBtn}
                  type="radio"
                  name="sex"
                  onChange={(event) => handleInputChange(formik, event)}
                  value="male"
                />
                <span className={css.customRadioBtn}></span>
                Male
              </label>
              <label className={css.radioBtnLabel}>
                <Field
                  className={css.radioBtn}
                  type="radio"
                  name="sex"
                  onChange={(event) => handleInputChange(formik, event)}
                  value="female"
                />
                <span className={css.customRadioBtn}></span>
                Female
              </label>
            </div>
          </div>
          <div role="group" className={css.lifestyleGroup}>
            <label className={css.radioBtnLabel}>
              <Field
                className={css.radioBtn}
                type="radio"
                name="levelActivity"
                onChange={(event) => handleInputChange(formik, event)}
                value="1"
              />
              <span className={css.customRadioBtn}></span>
              Sedentary lifestyle (little or no physical activity)
            </label>
            <label className={css.radioBtnLabel}>
              <Field
                className={css.radioBtn}
                type="radio"
                name="levelActivity"
                onChange={(event) => handleInputChange(formik, event)}
                value="2"
              />
              <span className={css.customRadioBtn}></span>
              Light activity (light exercises/sports 1-3 days per week)
            </label>
            <label className={css.radioBtnLabel}>
              <Field
                className={css.radioBtn}
                type="radio"
                name="levelActivity"
                onChange={(event) => handleInputChange(formik, event)}
                value="3"
              />
              <span className={css.customRadioBtn}></span>
              Moderately active (moderate exercises/sports 3-5 days per week)
            </label>
            <label className={css.radioBtnLabel}>
              <Field
                className={css.radioBtn}
                type="radio"
                name="levelActivity"
                onChange={(event) => handleInputChange(formik, event)}
                value="4"
              />
              <span className={css.customRadioBtn}></span>
              Very active (intense exercises/sports 6-7 days per week)
            </label>
            <label className={css.radioBtnLabel}>
              <Field
                className={css.radioBtn}
                type="radio"
                name="levelActivity"
                onChange={(event) => handleInputChange(formik, event)}
                value="5"
              />
              <span className={css.customRadioBtn}></span>
              Extremely active (very strenuous exercises/sports and physical
              work)
            </label>
          </div>
          <button
            className={css.saveBtn}
            type="submit"
            disabled={isFormChanged}
          >
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileSettingsForm;
