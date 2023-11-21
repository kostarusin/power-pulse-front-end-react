// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import css from './ProductsItem.module.css';
import { grayForText } from '../../Helpers/helpers';
import sprite from '../../../assets/icons-optimized.svg';

import icons from '../../../assets/icons.svg';

const ProductCard = ({
  visibleproducts,
  toggleSuccessModal,
  toggleSuccessModal1,
}) => {
  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

    return visibleproducts.map((product) => {
    return (
      <li key={product.item._id} className={css.card}>
        <div className={css.cardPart1}>
          <p className={css.dietField}>DIET</p>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            {' '}
            <Brightness1Icon
              color={product.allowed ? 'success' : 'error'}
              viewBox="0 0 24 24"
              fontSize="small"
            />
            <p className={css.productEnergyItem}>{product.allowed ? 'Recommended' : 'Not recommended'}</p>
            <button
              className={css.addButton}
              onClick={() => {
                toggleSuccessModal();
                toggleSuccessModal1(product.item);
              }}
            >
              Add
              <svg width="16" height="16" className={css.svg}>
                <use href={`${sprite}#icon-add-arrow`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.cardPart2}>
          <svg height={'24px'} width={'24px'} className={css.runnerSvg}>
            <use
              href={`${icons}#icon-running-stick-figure-svgrepo-com-1`}
              style={{
                fill: 'white',
                display: 'block',
                margin: 'auto',
              }}
            />
          </svg>

          <span className={css.productName}>
            {capitalizeFirstLetter(product.item.title)}
          </span>
        </div>
        <ul className={css.productEnergyList}>
          <li className={css.productEnergyItem}>
            <span style={{ color: grayForText }}>Calories: </span>
            <span>{product.item.calories}</span>
          </li>
          <li className={css.productEnergyItem1}>
            <span style={{ color: grayForText }}>Category: </span>
            {capitalizeFirstLetter(product.item.category)}
          </li>
          <li className={css.productEnergyItem}>
            <span style={{ color: grayForText }}>Weight: </span>
            {product.item.weight}
          </li>
        </ul>
      </li>
    );
  });
};

export default ProductCard;
