import { useEffect } from 'react';
import css from './ButtonModal.module.css';

export const ButtonModal = ({ btnType, text, onClick, disabled }) => {

  return (
    <button
      type={btnType}
      className={css.button}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
