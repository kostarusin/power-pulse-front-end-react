import { useState } from 'react';

import React from 'react';
import { Modal } from '../../components/Modal/Modal';
import { AddExerciseForm } from '../../components/AddExerciseForm/AddExerciseForm';

const Exercises = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const exerciseTest = {
    _id: '64f2458d6f67bc34bae4f813',
    bodyPart: 'upper arms',
    equipment: 'barbell',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0038.gif',
    name: 'barbell drag curl',
    target: 'biceps',
    burnedCalories: 84,
    time: 3,
  };

  return (
    <div>
      Exercises
      <button type="button" onClick={toggleModal}>
        TEST Open exercise
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <AddExerciseForm exercise={exerciseTest} />
        </Modal>
      )}
    </div>
  );
};

export default Exercises;
