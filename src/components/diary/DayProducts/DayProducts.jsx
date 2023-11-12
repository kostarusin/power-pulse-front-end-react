import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/icons-optimized.svg';

import styles from './DayProducts.module.css';

import TableProducts from './TableProducts';

function DayProducts({ products }) {
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

      <TableProducts products={products} />
    </div>
  );
}

export default DayProducts;
