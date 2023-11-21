import { useSelector } from 'react-redux';
import { selectStatistics } from '../redux/statistics/selectors';

export const useStatistics = () => {
  const statistics = useSelector(selectStatistics);

  return {
    statistics,
  };
};
