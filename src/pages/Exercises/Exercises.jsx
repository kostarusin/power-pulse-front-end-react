import { useEffect } from 'react';
//import { WaistList } from '../../../src/components/Exercises/Waist/WaistList/WaistList';
import css from './Exercises.module.css';
import { ExercisesWrap } from '../../components/Exercises/ExercisesWrapper/ExercisesWrapper';

//redux
import { useDispatch } from 'react-redux';
import { useExercises } from '../../redux/hooks';
import { fetchByType, fetchExercises } from '../../redux/exercises/operations';

const Exercises = () => {
  const dispatch = useDispatch();
  const { exercises } = useExercises();
  const { bodyParts } = useExercises();


  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchByType());
  }, [dispatch]);

  return (
    <div className={css.div}>
       {/* <WaistList></WaistList> */}
      <ExercisesWrap></ExercisesWrap>
     
    </div>
  );
};

export default Exercises;
