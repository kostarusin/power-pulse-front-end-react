import { useEffect, useState } from 'react';

import { Modal } from '../../components/Modal/Modal';
import { AddExerciseForm } from '../../components/AddExerciseForm/AddExerciseForm';
import { AddExerciseSuccess } from '../../components/AddExerciseSuccess/AddExerciseSuccess';

// import { ExercisesWrap } from '../../components/Exercises/ExercisesWrapper/ExercisesWrapper';

//redux
import { useDispatch } from 'react-redux';
import { useExercises } from '../../redux/hooks';
import { fetchExercises } from '../../redux/exercises/operations';

const Exercises = () => {
  const dispatch = useDispatch();
  const { exercises } = useExercises();
  // console.log(exercises);

  const [showExerciseModal, setShowExerciseModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

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
      {/* <ExercisesWrap></ExercisesWrap> */}
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
      {showSuccessModal && (
        <Modal onClose={toggleSuccessModal}>
          <AddExerciseSuccess exercise={exerciseTest} />
        </Modal>
      )}
    </div>
  );
};

export default Exercises;
