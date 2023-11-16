import CustomSelect from '../../components/Products/customSelect.jsx';
import css from './Products.module.css';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';

import { orangeDark, white } from '../../components/Helpers/helpers.js';

import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal/Modal.jsx';

import { useDispatch } from 'react-redux';
import { useProducts } from '../../redux/hooks/useProducts.jsx';
import {
  fetchProductCategories,
  fetchProducts,
} from '../../redux/products/operations';
import { findProductByText } from '../../redux/products/slice.jsx';

import ProductCard from '../../components/Products/ProductCard/ProductCard.jsx';
import AddProductForm from '../../components/Products/AddProductForm/AddProductForm.jsx';

const optionsRecomendation = ['All', 'Recommended', 'Not recommended'];

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, categories, filter, filterRec, filterByText } =
    useProducts();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [productData, setProductData] = useState({});
  const [caclCall, setCalcCall] = useState(0);

  const showProducts =
    Array.isArray(products.products) && products.products.length > 0;

  let showCloseBtn = false;
  if (filterByText !== '') {
    showCloseBtn = true;
  }

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductCategories());
  }, [dispatch]);

  const getVisibleProducts = () => {
    if (!filter || filter.value === 'all' || filter.value === 'All') {
      return products.products;
    } else {
      return products.products.filter((product) =>
        product.item.category.toLowerCase().trim().includes(filter.value),
      );
    }
  };
  const visibleProducts = getVisibleProducts();


 

  const getVisibleProducts1ByRec = () => {
    if (filterRec === '') {
      return visibleProducts;
    } else {
      return visibleProducts.filter(({allowed}) =>
        allowed===filterRec,
      );
    }
  };
  const VisibleProducts1ByRec = getVisibleProducts1ByRec();



  const getVisibleProductsByTitle = () => {
    if (!filterByText) {
      return VisibleProducts1ByRec;
    } else {
      return VisibleProducts1ByRec.filter(({ item }) =>
        item.title.toLowerCase().trim().includes(filterByText.toLowerCase()),
      );
    }
  };
  const visibleProductsByTitle = getVisibleProductsByTitle();

  const toggleSuccessModal = () => {
    setShowSuccessModal((prevState) => !prevState);
    setCalcCall(0);
  };

  const toggleSuccessModal1 = (data) => {
    setProductData(data);
  };

  const handleChange = (event) => {
    const value = event.target.value;

    setCalcCall((value * productData.calories) / 100);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    dispatch(findProductByText(value));
  };

  const handleClearInput = (event) => {
    event.preventDefault();
    dispatch(findProductByText(''));
  };

  return (
    <section className={css.productsSection}>
      <p className={css.toolTip}>Filters</p>
      <div className={css.titleSearchBox}>
        <h1 className={css.title}>Products</h1>
        <div className={css.filtersContainer}>
          <div>
            <div className={css.searchInput}>
              <input
                type="text"
                className={css.searchField}
                placeholder="Search"
                onChange={handleSearchChange}
                value={filterByText}
              />
              <div className={css.buttonContainer}>
                {showCloseBtn && (
                  <button
                    className={css.closeButton}
                    onClick={handleClearInput}
                  >
                    <CloseIcon color={orangeDark} fontSize="medium" />
                  </button>
                )}
                <button className={css.searchButton}>
                  <SearchOutlinedIcon color={white} fontSize="medium" />
                </button>
              </div>
            </div>
          </div>
          <div className={css.selectContainer}>
            <CustomSelect
              placeholder="Categories"
              minWidth="146px"
              options={categories}
              name="Categories"
            />
            <CustomSelect
              placeholder="All"
              minWidth="173px"
              options={optionsRecomendation}
              name="Recommendations"
            />
          </div>
        </div>
      </div>

      <ul className={css.cardContainer}>
        {loading ||
          (showProducts && (
            <ProductCard
              visibleproducts={visibleProductsByTitle}
              toggleSuccessModal={toggleSuccessModal}
              toggleSuccessModal1={toggleSuccessModal1}
            />
          ))}
      </ul>

      {showSuccessModal && (
        <Modal onClose={toggleSuccessModal}>
          <AddProductForm
            toggleSuccessModal={toggleSuccessModal}
            handleChange={handleChange}
            productData={productData}
            caclCall={caclCall}
          />
        </Modal>
      )}
    </section>
  );
};

export default Products;
