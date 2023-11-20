import { useEffect, useState } from 'react';
import { ExercisesList } from '../../components/Exercises/Exercises/ExercisesList/ExercisesList';
import css from './Exercises.module.css';
import { ExercisesMain } from '../../components/Exercises/ExercisesMain/ExercisesMain';

//redux
import { useDispatch } from 'react-redux';
// import { useExercises } from '../../hooks';
import { fetchByType, fetchExercises } from '../../redux/exercises/operations';

const Exercises = () => {
  const dispatch = useDispatch();
  const [activeName, setActiveName] = useState(null);
  console.log(activeName)
  // const { exercises } = useExercises();
  // const { bodyParts } = useExercises();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchByType());
  }, [dispatch]);

  return (
    <div className={css.div}>
      {activeName ? <ExercisesList activeName={activeName} /> : <ExercisesMain setActiveName={setActiveName} />}
      
      
    </div>
  );
};

export default Exercises;
