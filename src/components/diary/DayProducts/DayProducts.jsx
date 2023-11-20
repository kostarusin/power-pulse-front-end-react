import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/icons-optimized.svg';

import styles from './DayProducts.module.css';

import ProductsList from './ProductsList';

function DayProducts({ products, location }) {
  return (
    <div className={styles.dayProductsWrapper}>
      <div className={styles.headerWrapper}>
        <p className={styles.title}>Products</p>
        <div className={styles.btnWrapper}>
          <button className={styles.addProductBtn}>
            <NavLink className={styles.link} state={{from: location}} to="/products">
              Add product{' '}
            </NavLink>
            <svg width="16" height="16" className={styles.svg}>
              <use href={`${sprite}#icon-add-arrow`}></use>
            </svg>
          </button>
        </div>
      </div>

      <ProductsList products={products} />
    </div>
  );
}

export default DayProducts;
