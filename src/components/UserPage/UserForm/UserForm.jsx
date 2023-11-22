//formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ProfileSettingsSchema from './yapValidateSchema';
import ToastIconError from '../../toastComponents/ToastIconError';
import ToastIconSuccess from '../../toastComponents/ToastIconSuccess/ToastIconSuccess';
import CloseBtn from '../../toastComponents/CloseBtn';
//lodash
import isEqual from 'lodash/isEqual';
//redux
import { useDispatch } from 'react-redux';
import { updateInfo } from '../../../redux/auth/operations';
import { useAuth } from '../../../hooks';
//datepicker
import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';
//notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cssError from '../../toastComponents/ToastIconError/ToastIconError.module.css';
import cssSuccess from '../../toastComponents/ToastIconSuccess/ToastIconSuccess.module.css';
//styles
import css from './UserForm.module.css';
import { useState } from 'react';
import { format } from 'date-fns';
//formatDate
import convertValues from './typesConvertedFunction';

const UserForm = ({ selectedDate }) => {
  const dispatch = useDispatch();

  const [isFormChanged, setFormChanged] = useState(false);

  const { user } = useAuth();

  const handleSubmit = (values) => {
    const convertedUser = convertValues(user);
    const convertedValues = convertValues(values);
    const areEqual = isEqual(convertedUser, convertedValues);

    if (areEqual) {
      toast.info('Please, choose new options!', {
        position: 'top-center',
        className: cssError.customToastError,
        progressClassName: cssError.toastProgressBar,
        icon: ToastIconError,
        closeButton: CloseBtn,
      });
      setFormChanged(false);
    } else {
      const updatedValues = { ...values, avatarURL: user.avatarURL };

      delete updatedValues.email;
      dispatch(updateInfo(updatedValues));
      setFormChanged(true);
      toast.info('Information successfully saved!', {
        position: 'top-center',
        className: cssSuccess.customToastSuccess,
        progressClassName: cssSuccess.toastProgressBar,
        icon: ToastIconSuccess,
        closeButton: CloseBtn,
      });
    }
  };

  const handleFormChange = () => {
    setFormChanged(true);
  };

  const initialValues = {
    username: user.username,
    email: user.email,
    height: user.height,
    currentWeight: user.currentWeight,
    desiredWeight: user.desiredWeight,
    birthday: user.birthday,
    blood: String(user.blood),
    sex: user.sex,
    levelActivity: String(user.levelActivity),
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ProfileSettingsSchema}
    >
      {(formik) => (
        <Form className={css.formContainer} onChange={handleFormChange}>
          <div className={css.basicInfoContainer}>
            <label htmlFor="username" className={css.fieldWithError}>
              <div className={css.setName}>Basic info</div>
              <Field
                className={`${css.basicInfoInput} ${
                  formik.errors.username ? css.invalidInput : ''
                }`}
                name="username"
                type="text"
                placeholder="Anna Rybachok"
              />
              <div className={css.error}>
                <ErrorMessage
                  component="div"
                  name="username"
                  className={css.ErrorMessage}
                />
              </div>
            </label>
            <label htmlFor="email" className={css.fieldWithError}>
              <Field
                className={css.basicInfoInput}
                name="email"
                type="email"
                placeholder="annarybachok@gmail.com"
                readOnly
              />
              <div className={css.error}></div>
            </label>
          </div>
          <div className={css.secondaryInfoContainer}>
            <div className={css.flexContainer}>
              <label htmlFor="height" className={css.secondaryInfoLabel}>
                <span className={css.setName}>Height</span>
                <Field
                  className={`${css.infoInput} ${
                    formik.errors.height ? css.invalidInput : ''
                  }`}
                  name="height"
                  type="number"
                  placeholder="0"
                />
                <div className={css.error}>
                  <ErrorMessage
                    component="div"
                    name="height"
                    className={css.ErrorMessage}
                  />
                </div>
              </label>
              <label htmlFor="currentWeight" className={css.secondaryInfoLabel}>
                <span className={css.setName}>Current Weight</span>
                <Field
                  className={`${css.infoInput} ${
                    formik.errors.currentWeight ? css.invalidInput : ''
                  }`}
                  name="currentWeight"
                  type="number"
                  placeholder="0"
                />
                <div className={css.error}>
                  <ErrorMessage
                    component="div"
                    name="currentWeight"
                    className={css.ErrorMessage}
                  />
                </div>
              </label>
            </div>
            <div className={css.flexContainer}>
              <label htmlFor="desiredWeight" className={css.secondaryInfoLabel}>
                <span className={css.setName}>Desired Weight</span>
                <Field
                  className={`${css.infoInput} ${
                    formik.errors.desiredWeight ? css.invalidInput : ''
                  }`}
                  name="desiredWeight"
                  type="number"
                  placeholder="0"
                />
                <div className={css.error}>
                  <ErrorMessage
                    component="div"
                    name="desiredWeight"
                    className={css.ErrorMessage}
                  />
                </div>
              </label>
              <label htmlFor="birthday" className={css.birthdayForm}>
                <Field
                  className={`${css.infoInput} ${
                    formik.errors.birthday ? css.invalidInput : ''
                  }`}
                  name="birthday"
                  type="date"
                  selectedDate={selectedDate}
                  render={() => (
                    <StyledDatepicker
                      onChange={(date) => {
                        formik.setFieldValue(
                          'birthday',
                          format(date, 'yyyy-MM-dd'),
                        );
                        handleFormChange();
                      }}
                    />
                  )}
                />
                <div className={css.error}>
                  <ErrorMessage
                    component="div"
                    name="birthday"
                    className={css.ErrorMessage}
                  />
                </div>
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
              Extremely active (very strenuous exercises/sports and physical
              work)
            </label>
          </div>
          <button
            className={css.saveBtn}
            type="submit"
            disabled={!isFormChanged}
          >
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
