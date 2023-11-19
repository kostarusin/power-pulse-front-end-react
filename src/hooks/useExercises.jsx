import { useSelector } from 'react-redux';
import {
  selectLoading,
  selectExercises,
  selectByType,
} from '../redux/exercises/selectors';

export const useExercises = () => {
  const loading = useSelector(selectLoading);
  const exercises = useSelector(selectExercises);
  const bodyParts = useSelector(selectByType);
  return {
    loading,
    exercises,
    bodyParts,
  };
};
