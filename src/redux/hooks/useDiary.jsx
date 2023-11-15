import { useSelector } from 'react-redux';
import {
  selectDoneExercises,
  selectConsumedProducts,
  selectBurnedCalories,
  selectConsumedCalories,
} from '../dairy/selectors';

export const useDiary = () => {
  return {
    doneExercises: useSelector(selectDoneExercises),
    consumedProducts: useSelector(selectConsumedProducts),
    burnedCalories: useSelector(selectBurnedCalories),
    consumedCalories: useSelector(selectConsumedCalories),
  };
};
