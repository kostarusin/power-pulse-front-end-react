// import css from './ProductsItem.module.css';

const ProductsItem = ({ title, category, calories, weight, recommend }) => {
  return (
    <div>
      <div>
        <div>Title</div>
        <div>{title}</div>
      </div>
      <div>
        <div>Category</div>
        <div>{category}</div>
      </div>
      <div>
        <div>Calories</div>
        <div>{calories}</div>
      </div>
      <div>
        <div>Weight</div>
        <div>{weight}</div>
      </div>
      <div>
        <div>Recommend</div>
        <div>{recommend}</div>
      </div>
      <div>
        <div>svg</div>
      </div>
    </div>
  );
};

export default ProductsItem;
