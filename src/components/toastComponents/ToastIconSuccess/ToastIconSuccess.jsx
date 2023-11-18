import icon from '../../../assets/icons-optimized.svg';

const ToastIconSuccess = () => {
  return (
    <span>
      <svg width="20" height="20">
        <use href={`${icon}#icon-validation-checkbox-green`}></use>
      </svg>
    </span>
  );
};

export default ToastIconSuccess;
