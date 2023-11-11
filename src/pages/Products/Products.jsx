import CustomSelect from '../../components/Products/customSelect.jsx';
import css from './Products.module.css';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { orangeDark, white } from '../../components/Helpers/helpers.js';

const Products = () => {
  return (
    <section className={css.productsSection}>
      <p className={css.toolTip}>Filters</p>
      <div className={css.titleSearchBox}>
        <h1 className={css.title}>Products</h1>
        <div className={css.filtersContainer}>
          <div>
            <div className={css.searchInput}>
              <input type="text" className={css.searchField} />
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
            <CustomSelect placeholder="Categories" minWidth="146px" />
            <CustomSelect placeholder="All" minWidth="173px" />
          </div>
        </div>
      </div>

      <ul className={css.cardContainer}>
        <li className={css.card}>
          <div className={css.cardPart1}>
            <p className={css.dietField}>DIET</p>
            <div
              style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
            >
              {' '}
              <p>Recommended</p>
              <button className={css.addButton}>
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

            <span>Name of the product</span>
          </div>
          <ul className={css.productEnergyList}>
            <li className={css.productEnergyItem}>Calories: </li>
            <li className={css.productEnergyItem}>Category: </li>
            <li className={css.productEnergyItem}>Weight: </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Products;
