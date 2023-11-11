import { useState } from 'react';

import React from 'react';
import { Modal } from '../../components/Modal/Modal';
import { AddExerciseForm } from '../../components/AddExerciseForm/AddExerciseForm';
import { AddExerciseSuccess } from '../../components/AddExerciseSuccess/AddExerciseSuccess';


const Exercises = () => {
  const [showExerciseModal, setShowExerciseModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const toggleExerciseModal = () => {
    setShowExerciseModal((prevState) => !prevState);
  };

  const toggleSuccessModal = () => {
    setShowSuccessModal((prevState) => !prevState);
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
      <button type="button" onClick={toggleExerciseModal}>
        TEST Open exercise
      </button>
      {showExerciseModal && (
        <Modal onClose={toggleExerciseModal}>
          <AddExerciseForm exercise={exerciseTest} />
        </Modal>
      )}

<button type="button" onClick={toggleSuccessModal}>
        TEST Open exercise
      </button>

      {showModal && <Modal onClose={toggleModal}></Modal>}


      {showSuccessModal && (
        <Modal onClose={toggleSuccessModal}>
          <AddExerciseSuccess exercise={exerciseTest} />
        </Modal>
      )}

    </div>
  );
};

export default Exercises;
