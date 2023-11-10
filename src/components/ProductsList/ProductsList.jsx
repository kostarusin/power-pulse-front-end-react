import ProductsItem from '../ProductsItem/ProductsItem';
// import css from './ProductsList.module.css';

const ProductsList = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => {
        return <ProductsItem key={index} data={item} />;
      })}
    </ul>
  );
};

export default ProductsList;
