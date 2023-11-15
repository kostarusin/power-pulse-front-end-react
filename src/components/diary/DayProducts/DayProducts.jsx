import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/icons-optimized.svg';

import styles from './DayProducts.module.css';

import ProductsList from './ProductsList';

function DayProducts({ products, selectedDate }) {
  return (
    <div className={styles.dayProductsWrapper}>
      <div className={styles.headerWrapper}>
        <p className={styles.title}>Products</p>
        <div className={styles.btnWrapper}>
          <button className={styles.addProductBtn}>
            <NavLink className={styles.link} to="/products">
              Add product{' '}
            </NavLink>
            <svg width="16" height="16">
              <use href={`${sprite}#icon-add-arrow`}></use>
            </svg>
          </button>
        </div>
      </div>

      <ProductsList products={products} selectedDate={selectedDate} />
    </div>
  );
}

export default DayProducts;
