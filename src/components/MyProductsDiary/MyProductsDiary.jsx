import ProductsList from '../ProductsList/ProductsList';
import css from './MyProductsDiary.module.css';

const MyProductDiary = () => {
  const data = [
    {
      title: 'Bread Hercules grain',
      category: 'Flour',
      calories: 289,
      weight: 100,
      recommend: 'yes',
    },
    {
      title: 'Bread Hercules grain',
      category: 'Flour',
      calories: 289,
      weight: 100,
      recommend: 'yes',
    },
    {
      title: 'Bread Hercules grain',
      category: 'Flour',
      calories: 289,
      weight: 100,
      recommend: 'yes',
    },
  ];

  return (
    <div>
      <div>
        <div className={css.wrapperTitle}>
          <div>Products</div>
          <button type="button">
            <div>Add product</div>
            <div>svg</div>
          </button>
        </div>
      </div>
      <div>
        <ProductsList data={data} />
      </div>
    </div>
  );
};

export default MyProductDiary;
