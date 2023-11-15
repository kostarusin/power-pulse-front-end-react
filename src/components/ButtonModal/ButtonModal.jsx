import css from './ButtonModal.module.css';

export const ButtonModal = ({ btnType, text }) => {
  return (
    <button type={btnType} className={css.button}>
      {text}
    </button>
  );
};
