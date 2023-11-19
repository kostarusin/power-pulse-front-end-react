import css from './ProductsFilters.module.css';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CustomSelect from '../../../components/products/customSelect.jsx';

import { orangeDark, white } from '../../../components/Helpers/helpers.js';

const optionsRecomendation = ['All', 'Recommended', 'Not recommended'];

const ProductsFilters = ({
  handleClearInput,
  handleSearchChange,
  showCloseBtn,
  filterByText,
  categories,
}) => {
  return (
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
              <button className={css.closeButton} onClick={handleClearInput}>
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
  );
};

export default ProductsFilters;
