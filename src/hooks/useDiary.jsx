import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectDoneExercises,
  selectConsumedProducts,
  selectBurnedCalories,
  selectConsumedCalories,
  selectDate,
} from '../redux/dairy/selectors';

export const useDiary = () => {
  return {
    doneExercises: useSelector(selectDoneExercises),
    consumedProducts: useSelector(selectConsumedProducts),
    burnedCalories: useSelector(selectBurnedCalories),
    consumedCalories: useSelector(selectConsumedCalories),
    date: useSelector(selectDate),
    isLoading: useSelector(selectIsLoading),
  };
};
