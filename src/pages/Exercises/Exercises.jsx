import { useEffect, useState } from 'react';
import { WaistList } from '../../components/exercises/Waist/WaistList/WaistList';
import { Modal } from '../../components/Modal/Modal';
import { AddExerciseForm } from '../../components/AddExerciseForm/AddExerciseForm';
import { AddExerciseSuccess } from '../../components/AddExerciseSuccess/AddExerciseSuccess';
import css from './Exercises.module.css'
import { ExercisesWrap } from '../../components/exercises/ExercisesWrapper/ExercisesWrapper';

//redux
import { useDispatch } from 'react-redux';
import { useExercises } from '../../redux/hooks';
import { fetchByType, fetchExercises } from '../../redux/exercises/operations';

const Exercises = () => {
  const dispatch = useDispatch();
  const { exercises } = useExercises();
  const { bodyParts } = useExercises();
  console.log(exercises);
  console.log(bodyParts);
  const [showExerciseModal, setShowExerciseModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [exercise, setExercise] = useState({});

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchByType());
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
    <div className={css.div}>

   
       <ExercisesWrap></ExercisesWrap> 
       <WaistList></WaistList>
      <button type="button" onClick={toggleExerciseModal}>
        TEST Open exercise
      </button>
      {showExerciseModal && (
        <Modal onClose={toggleExerciseModal}>
          <AddExerciseForm
            exercise={exerciseTest}
            toggleExerciseModal={toggleExerciseModal}
            toggleSuccessModal={toggleSuccessModal}
            setExercise={setExercise}
          />
        </Modal>
      )}
      {showSuccessModal && (
        <Modal onClose={toggleSuccessModal}>
          <AddExerciseSuccess exercise={exercise} />
        </Modal>
      )}
    </div>
  );
};

export default Exercises;
