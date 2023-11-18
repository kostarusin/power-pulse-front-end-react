import { useSelector } from 'react-redux';
import {
  selectCategories,
  selectFilter,
  selectFilterRec,
  selectLoading,
  selectProducts,
  selectfilterByText,
} from '../redux/products/selectors';

export const useProducts = () => {
  const loading = useSelector(selectLoading);
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const filter = useSelector(selectFilter);
  const filterRec = useSelector(selectFilterRec);
  const filterByText = useSelector(selectfilterByText);

  return {
    loading,
    products,
    categories,
    filter,
    filterRec,
    filterByText,
  };
};
