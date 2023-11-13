import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ProfileSettingsForm.module.css';
import ProfileSettingsSchema from './yapValidateSchema';

const ProfileSettingsForm = () => {
  const initialValues = {
    username: '',
    email: '',
    height: '',
    currentWeight: '',
    desiredWeight: '',
    birthday: '',
  };

  // const handleSubmit = (values, { resetForm }) => {
  //   console.log(values);
  // };

  return (
    <Formik
      initialValues={initialValues}
      // onSubmit={handleSubmit}
      validationSchema={ProfileSettingsSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.basicInfoContainer}>
          <label htmlFor="username">
            <div className={css.setName}>Basic info</div>
            <Field
              className={css.basicInfoInput}
              name="username"
              type="text"
              placeholder="Anna Rybachok"
            />
            <ErrorMessage
              component="div"
              name="username"
              className={css.ErrorMessage}
            />
          </label>
          <label htmlFor="email">
            <Field
              className={css.basicInfoInput}
              name="email"
              type="email"
              placeholder="annarybachok@gmail.com"
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
                placeholder="0"
              />
              <ErrorMessage
                component="div"
                name="height"
                className={css.ErrorMessage}
              />
            </label>
            <label htmlFor="currentWeight" className={css.secondaryInfoLabel}>
              <span className={css.setName}>Current Weight</span>
              <Field
                className={css.infoInput}
                name="currentWeight"
                type="number"
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
                placeholder="0"
              />
              <ErrorMessage
                component="div"
                name="desiredWeight"
                className={css.ErrorMessage}
              />
            </label>
            <label htmlFor="birthday">
              <Field
                className={css.infoInput}
                name="birthday"
                type="date"
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
                value="1"
              />
              <span className={css.customRadioBtn}></span>1
            </label>
            <label className={css.radioBtnLabel}>
              <Field
                className={css.radioBtn}
                type="radio"
                name="blood"
                value="2"
              />
              <span className={css.customRadioBtn}></span>2
            </label>
            <label className={css.radioBtnLabel}>
              <Field
                className={css.radioBtn}
                type="radio"
                name="blood"
                value="3"
              />
              <span className={css.customRadioBtn}></span>3
            </label>
            <label className={css.radioBtnLabel}>
              <Field
                className={css.radioBtn}
                type="radio"
                name="blood"
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
              value="5"
            />
            <span className={css.customRadioBtn}></span>
            Extremely active (very strenuous exercises/sports and physical work)
          </label>
        </div>
        <button className={css.saveBtn} type="submit">
          Save
        </button>
      </Form>
    </Formik>
  );
};

export default ProfileSettingsForm;
