import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import icons from '../../assets/icons.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  return createPortal(
    <div className={css.modal_backdrop} onClick={handleBackdropClick}>
      <div className={css.modal_content}>
        <svg className={css.close_x} onClick={handleCloseClick}>
          <use href={icons + '#icon-x'} />
        </svg>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};
