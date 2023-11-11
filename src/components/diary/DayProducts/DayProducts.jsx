import { NavLink } from 'react-router-dom';

import styles from './DayProducts.module.css';

import TableProducts from './TableProducts';

function DayProducts({ products }) {
  return (
    <div className={styles.dayProductsWrapper}>
      <div className={styles.headerWrapper}>
        <p className={styles.title}>Products</p>
        <div className={styles.btnWrapper}>
          <button className={styles.addProductBtn}>
            <NavLink to="/products">Add product</NavLink>
          </button>
          <div>sv</div>
        </div>
      </div>

      <TableProducts products={products} />
    </div>
  );
}

export default DayProducts;
