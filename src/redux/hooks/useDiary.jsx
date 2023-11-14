import { useSelector } from 'react-redux';
import {
  selectDoneExercises,
  selectConsumedProducts,
} from '../dairy/selectors';

export const useDiary = () => {
  return {
    doneExercises: useSelector(selectDoneExercises),
    consumedProducts: useSelector(selectConsumedProducts),
  };
};
