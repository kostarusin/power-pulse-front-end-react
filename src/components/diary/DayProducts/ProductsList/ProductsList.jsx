import { useState, useEffect } from 'react';
import css from './ProductsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteExerciseOrProduct } from '../../../../redux/dairy/operations';
import sprite from '../../../../assets/icons-optimized.svg';
import { useDiary } from '../../../../hooks';

const ProductsList = ({ products }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const { date } = useDiary();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDeleteExercise = (product) => {
    dispatch(
      deleteExerciseOrProduct({
        date: date,
        credentials: {
          type: 'product',
          id: product._id,
        },
      }),
    );
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={css.wrapper}>
      {products.length !== 0 ? (
        products.map((product, index) => {
          return (
            <div className={css.wrapperListContainer} key={product._id}>
              <ul className={css.wrapperList}>
                <li className={css.wrapperItemTitle}>
                  <div
                    className={css.title}
                    style={{
                      display:
                        viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                    }}
                  >
                    Title
                  </div>

                  <div className={css.text}>
                    {capitalizeFirstLetter(product.product.title)}
                  </div>
                </li>
                <li className={css.wrapperItemCategory}>
                  <div
                    className={css.title}
                    style={{
                      display:
                        viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                    }}
                  >
                    Category
                  </div>

                  <div className={css.text}>
                    {capitalizeFirstLetter(product.product.category)}
                  </div>
                </li>
                <li className={css.wrapperItemCalories}>
                  <div
                    className={css.title}
                    style={{
                      display:
                        viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                    }}
                  >
                    Calories
                  </div>

                  <div className={css.text}>{product.calories}</div>
                </li>
                <li className={css.wrapperItemWeigth}>
                  <div
                    className={css.title}
                    style={{
                      display:
                        viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                    }}
                  >
                    Weight
                  </div>

                  <div className={css.text}>{product.amount}</div>
                </li>
                <li className={css.wrapperItemRecommend}>
                  <div
                    className={css.title}
                    style={{
                      display:
                        viewportWidth >= 768 && index > 0 ? 'none' : 'block',
                    }}
                  >
                    Recommend
                  </div>
                  <div className={css.wrapperRecommendContainer}>
                    <div className={css.wrapperRecommend}>
                      <div
                        className={css.circle}
                        style={{
                          backgroundColor: product.groupBloodNotAllowed
                            ? 'green'
                            : 'red',
                        }}
                      ></div>
                      <div className={css.textRecommend}>
                        {product.groupBloodNotAllowed ? 'Yes' : 'No'}
                      </div>
                    </div>
                    <button
                      type="button"
                      className={css.btnDelete}
                      onClick={() => handleDeleteExercise(product)}
                    >
                      <svg width="20" height="20" className={css.svg}>
                        <use href={`${sprite}#icon-trash`}></use>
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>{' '}
            </div>
          );
        })
      ) : (
        <div className={css.containerError}>
          <span>Not found products</span>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
