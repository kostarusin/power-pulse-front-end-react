import icon from '../../../assets/icons.svg';

const ToastIconError = () => {
  return (
    <span>
      <svg width="20" height="20">
        <use href={`${icon}#icon-exclamation-mark`}></use>
      </svg>
    </span>
  );
};

export default ToastIconError;
