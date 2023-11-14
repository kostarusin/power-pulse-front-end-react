import CustomSelect from '../../components/Products/customSelect.jsx';
import css from './Products.module.css';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  grayForText,
  grayMiddle,
  orangeDark,
  white,
} from '../../components/Helpers/helpers.js';

import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal/Modal.jsx';
import { ButtonModal } from '../../components/ButtonModal/ButtonModal.jsx';

import { useDispatch } from 'react-redux';
import { useProducts } from '../../redux/hooks/useProducts.jsx';
import {
  fetchProductCategories,
  fetchProducts,
} from '../../redux/products/operations';
import { findProductByText } from '../../redux/products/slice.jsx';

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
    if (!filter) {
      return products.products;
    } else {
      return products.products.filter(({ item }) =>
        item.category.toLowerCase().trim().includes(filter.value),
      );
    }
  };
  const visibleProducts = getVisibleProducts();

  const getVisibleProductsByTitle = () => {
    if (!filterByText) {
      return visibleProducts;
    } else {
      return visibleProducts.filter(({ item }) =>
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
          (showProducts &&
            visibleProductsByTitle.map(({ item }) => {
              return (
                <li key={item._id} className={css.card}>
                  <div className={css.cardPart1}>
                    <p className={css.dietField}>DIET</p>
                    <div
                      style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'flex-start',
                      }}
                    >
                      {' '}
                      <p>Recommended</p>
                      <button
                        className={css.addButton}
                        onClick={() => {
                          toggleSuccessModal();
                          toggleSuccessModal1(item);
                        }}
                      >
                        Add
                        <ArrowForwardIcon fontSize="small" />
                      </button>
                    </div>
                  </div>
                  <div className={css.cardPart2}>
                    <svg
                      height={'24px'}
                      width={'24px'}
                      className={css.runnerSvg}
                    >
                      <use
                        href="src/assets/icons.svg#icon-running-stick-figure-svgrepo-com-1"
                        style={{
                          fill: 'white',
                          display: 'block',
                          margin: 'auto',
                        }}
                      />
                    </svg>

                    <span className={css.productName}>{item.title}</span>
                  </div>
                  <ul className={css.productEnergyList}>
                    <li className={css.productEnergyItem}>
                      <span style={{ color: grayForText }}>Calories: </span>
                      <span>{item.calories}</span>
                    </li>
                    <li className={css.productEnergyItem1}>
                      <span style={{ color: grayForText }}>Category: </span>
                      {item.category}
                    </li>
                    <li className={css.productEnergyItem}>
                      <span style={{ color: grayForText }}>Weight: </span>
                      {item.weight}
                    </li>
                  </ul>
                </li>
              );
            }))}
      </ul>

      {showSuccessModal && (
        <Modal onClose={toggleSuccessModal}>
          <div>
            <form>
              <div className={css.inputModalBox}>
                <input
                  type="text"
                  value={productData.title}
                  className={css.modalInput}
                  style={{ color: grayMiddle }}
                  disabled
                />
                <input
                  type="text"
                  className={css.modalInputcall}
                  onChange={handleChange}
                />
              </div>
              <p>
                <span style={{ color: grayForText }}>Calories: </span>
                {caclCall}
              </p>
            </form>
            <div className={css.buttonModalBox}>
              <ButtonModal btnType={'button'} text={'Add to diary'} />
              <button
                className={css.closeModalButton}
                onClick={toggleSuccessModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Products;
