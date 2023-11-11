import { useState } from 'react';

import React from 'react';
import { Modal } from '../../components/Modal/Modal';
import {CustomizedTabs} from "../../components/Exercises/Exercises"
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
<CustomizedTabs/>
    </div>
  );
};

export default Exercises;
