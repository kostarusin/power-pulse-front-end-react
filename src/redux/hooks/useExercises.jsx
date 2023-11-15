import { useSelector } from 'react-redux';
import { selectLoading, selectExercises} from '../exercises/selectors';

export const useExercises = () => {
  const loading = useSelector(selectLoading);
  const exercises = useSelector(selectExercises);

  return {
    loading,
    exercises,
  };
};
