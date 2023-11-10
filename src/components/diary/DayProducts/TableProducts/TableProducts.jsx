import styles from './TableProducts.module.css';

function TableProducts({ products }) {
  const listOfProducts = products?.map((obj) => {
    return (
      <tr key={obj._id}>
        <td className={styles.tdTitle}>
          <div>{obj.product.title}</div>
        </td>
        <td className={styles.tdCategory}>
          <div>{obj.product.category}</div>
        </td>
        <td className={styles.tdCalories}>
          <div>caloriesEaten</div>
        </td>
        <td className={styles.tdWeight}>
          <div>{obj.weight}</div>
        </td>
        <td className={styles.tdRecommend}>
          <div>recom</div>
        </td>
        <td className={styles.tdDellete}>
          <button type="button">
            <div>sv</div>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      {listOfProducts?.length > 0 ? (
        <div className={styles.DayProducts}>
          <div className={styles.DayProductsTable}>
            <table>
              <thead>
                <tr>
                  <th className={styles.thTitle}>Title</th>
                  <th className={styles.thCategory}>Category</th>
                  <th className={styles.thCalories}>Calories</th>
                  <th className={styles.thWeight}>Weight</th>
                  <th className={styles.thRecommend}>Recommend</th>
                </tr>
              </thead>
              <tbody>{listOfProducts}</tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className={styles.DayProducts}>
          <div className={styles.DayProductsTable}>
            <p className={styles.not_found}>Not found products</p>
          </div>
        </div>
      )}
    </>
  );
}

export default TableProducts;
