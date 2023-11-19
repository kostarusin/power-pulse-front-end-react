import { useEffect, useState, useRef } from 'react';
import Loader from '../../Loader/Loader';
import ProductCard from '../ProductsItem/ProductsItem';

import css from './ProductsList.module.css';

const ProductsList = ({
  visibleproducts,
  toggleSuccessModal,
  toggleSuccessModal1,
  showProducts,
  loading,
}) => {
  const [itemsToShow, setItemsToShow] = useState(10);
  const [visibleProductsArray, setVisibleProductsArray] = useState([]);
  const ulRef = useRef(null);

  useEffect(() => {
    if (visibleproducts) {
      setVisibleProductsArray(Object.values(visibleproducts));
    }
  }, [visibleproducts]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setItemsToShow((prevItems) => prevItems + 10);
    }, 200);
  };

  const handleScroll = () => {
    const ul = ulRef.current;

    if (ul.scrollTop + ul.clientHeight >= ul.scrollHeight - 20) {
      fetchMoreData();
    }
  };

  const getVisibleProductsSlice = () => {
    return visibleProductsArray.slice(0, itemsToShow);
  };

  return (
    <ul
      className={css.cardContainer}
      onScroll={handleScroll}
      ref={ulRef}
      style={{ overflowY: 'auto' }}
    >
      {loading ? (
        <Loader />
      ) : (
        showProducts && (
          <ProductCard
            visibleproducts={
              window.innerWidth < 1440
                ? visibleProductsArray
                : getVisibleProductsSlice()
            }
            toggleSuccessModal={toggleSuccessModal}
            toggleSuccessModal1={toggleSuccessModal1}
          />
        )
      )}
    </ul>
  );
};

export default ProductsList;
