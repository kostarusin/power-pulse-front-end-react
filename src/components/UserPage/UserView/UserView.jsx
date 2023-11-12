import css from './UserView.module.css';
const UserView = () => {
  return (
    <>
      <h1 className={css.title}>Profile Settings</h1>

      <div className={css['user-view-container']}>
        <div className={css['user-img-container']}>
          <img className={css['user-img']} src="./src/assets/user.jpg" alt="" />
          <button className={css['user-img-button']}>
            <svg className={css['user-img-button-svg']}>
              <use href="src\assets\icons-optimized.svg#icon-check-mark"></use>
            </svg>
          </button>
        </div>

        <div className={css['user-name-container']}>
          <h2 className={css['user-name-container-title']}>Anna Rybachok</h2>
          <p className={css['user-name-container-text']}>User</p>
        </div>

        <ul className={css['user-daily-list']}>
          <li className={css['user-daily-items']}>
            <div className={css['user-daily']}>
              <svg width="20" height="20">
                <use href="src\assets\icons-optimized.svg#icon-fork-knife"></use>
              </svg>
              <p className={css['user-daily-text']}>Daily calorie intake</p>
            </div>

            <p className={css['user-daily-text-value']}>0</p>
          </li>

          <li className={css['user-daily-items']}>
            <div className={css['user-daily']}>
              <svg width="20" height="20">
                <use href="src\assets\icons-optimized.svg#icon-dumbbell"></use>
              </svg>
              <p className={css['user-daily-text']}>Daily physical activity</p>
            </div>

            <p className={css['user-daily-text-value']}>0 min</p>
          </li>
        </ul>

        <p className={css['user-notification']}>
          <span>
            <svg width="24" height="24">
              <use href="src\assets\icons.svg#icon-exclamation-mark"></use>
            </svg>
          </span>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </p>

        <div className={css['user-logaut-container']}>
          <button className={css['user-logaut']}>
            Logaut
            <svg width="24" height="24">
              <use href="src\assets\icons-optimized.svg#icon-log-out"></use>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserView;
