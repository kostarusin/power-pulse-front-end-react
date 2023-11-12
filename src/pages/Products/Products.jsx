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

import products from '../../../src/temp/power-puls.products.json';
import productsCategories from '../../../src/temp/productsCategories.json';
import { useState } from 'react';
import { Modal } from '../../components/Modal/Modal.jsx';
import { ButtonModal } from '../../components/ButtonModal/ButtonModal.jsx';

const optionsCategories = [];
const optionsRecomendation = [
  { value: 'All', label: 'All' },
  { value: 'Recommended', label: 'Recommended' },
  { value: 'Not recommended', label: 'Not recommended' },
];

productsCategories.map((product) => {
  optionsCategories.push({
    value: product,
    label: product,
  });
});

const Products = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [productData, setProductData] = useState({});
  const [caclCall, setCalcCall] = useState(0);

  const toggleSuccessModal = () => {
    setShowSuccessModal((prevState) => !prevState);
    setCalcCall(0);
  };

  const toggleSuccessModal1 = (data) => {
    setProductData(data);
  };

  const handleChange = (event) => {
    const value = event.target.value;

    setCalcCall(value * productData.calories);
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
              />
              <div className={css.buttonContainer}>
                <button className={css.closeButton}>
                  <CloseIcon color={orangeDark} fontSize="medium" />
                </button>
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
              options={optionsCategories}
            />
            <CustomSelect
              placeholder="All"
              minWidth="173px"
              options={optionsRecomendation}
            />
          </div>
        </div>
      </div>

      <ul className={css.cardContainer}>
        {products.map((product) => {
          return (
            <li key={product._id.id} className={css.card}>
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
                      toggleSuccessModal1(product);
                    }}
                  >
                    Add
                    <ArrowForwardIcon fontSize="small" />
                  </button>
                </div>
              </div>
              <div className={css.cardPart2}>
                <svg height={'24px'} width={'24px'} className={css.runnerSvg}>
                  <use
                    href="src/assets/icons.svg#icon-running-stick-figure-svgrepo-com-1"
                    style={{ fill: 'white', display: 'block', margin: 'auto' }}
                  />
                </svg>

                <span className={css.productName}>{product.title}</span>
              </div>
              <ul className={css.productEnergyList}>
                <li className={css.productEnergyItem}>
                  <span style={{ color: grayForText }}>Calories: </span>
                  {product.calories}
                </li>
                <li className={css.productEnergyItem1}>
                  <span style={{ color: grayForText }}>Category: </span>
                  {product.category}
                </li>
                <li className={css.productEnergyItem}>
                  <span style={{ color: grayForText }}>Weight: </span>
                  {product.weight}
                </li>
              </ul>
            </li>
          );
        })}
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
