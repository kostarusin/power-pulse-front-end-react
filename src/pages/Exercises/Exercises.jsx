import { useState } from 'react';

import React from 'react';
import { Modal } from '../../components/Modal/Modal';

const Exercises = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div>
      Exercises
      <button type="button" onClick={toggleModal}>
        TEST Open exercise
      </button>
      {showModal && <Modal onClose={toggleModal}></Modal>}
    </div>
  );
};

export default Exercises;
