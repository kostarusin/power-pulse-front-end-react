import { useDispatch } from 'react-redux';
import { logOut, updateInfo } from '../../../redux/auth/operations';
import { useAuth } from '../../../hooks';

import css from './UserView.module.css';
import sprite from '../../../assets/icons-optimized.svg';
import icon from '../../../assets/icons.svg';
import iconUser from '../../../assets/user.jpg';

const UserView = () => {
  const { user } = useAuth();
  const avatar = user.avatarURL;

  const dispatch = useDispatch();

  const { bmr, dailyExerciseTime } = user;
  const DailyCalorieIntake = Math.floor(bmr);

  const handleFileChange = (event) => {
    event.preventDefault();
    const selectedFile = event.target.files[0];

    const formData = new FormData();
    formData.append('avatar', selectedFile);

    dispatch(updateInfo(formData));
  };

  return (
    <>
      <div className={css['user-view-container']}>
        <div className={css['user-img-container']}>
          <img
            className={css['user-img']}
            src={`${avatar ? avatar : iconUser}`}
            alt=""
          />
          <label className={css['user-img-input-container']}>
            <input
              id="fileInput"
              className={css['user-img-input']}
              type="file"
              onChange={handleFileChange}
            />
            <svg className={css['user-img-imput-svg']}>
              <use href={`${sprite}#icon-check-mark`}></use>
            </svg>
          </label>
        </div>
        <div className={css['user-name-container']}>
          <h2 className={css['user-name-container-title']}>{user.username}</h2>
          <p className={css['user-name-container-text']}>{user.email}</p>
        </div>
        <ul className={css['user-daily-list']}>
          <li className={css['user-daily-items']}>
            <div className={css['user-daily']}>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-fork-knife`}></use>
              </svg>
              <p className={css['user-daily-text']}>Daily calorie intake</p>
            </div>

            <p className={css['user-daily-text-value']}>
              {DailyCalorieIntake || 0}
            </p>
          </li>

          <li className={css['user-daily-items']}>
            <div className={css['user-daily']}>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-dumbbell`}></use>
              </svg>
              <p className={css['user-daily-text']}>Daily physical activity</p>
            </div>

            <p className={css['user-daily-text-value']}>
              {dailyExerciseTime || 0} min
            </p>
          </li>
        </ul>
        <p className={css['user-notification']}>
          <span>
            <svg width="24" height="24">
              <use href={`${icon}#icon-exclamation-mark`}></use>
            </svg>
          </span>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </p>
        <div className={css['user-logaut-container']}>
          <button
            className={css['user-logaut']}
            onClick={async () => {
              await dispatch(logOut());
              window.location.reload();
            }}
          >
            Logout
            <svg width="24" height="24">
              <use href={`${sprite}#icon-log-out`}></use>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserView;
