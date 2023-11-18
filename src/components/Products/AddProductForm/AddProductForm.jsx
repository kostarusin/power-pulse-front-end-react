import { grayForText, grayMiddle } from '../../Helpers/helpers';
import { ButtonModal } from '../../ButtonModal/ButtonModal';
import css from './AddProductForm.module.css';
import { useDispatch } from 'react-redux';
import { addExercises } from '../../../redux/dairy/operations';
import { useDiary } from '../../../hooks';

const AddProductForm = ({
  toggleSuccessModal,
  handleChange,
  productData,
  caclCall,
  amount,
  productId,
  toggleSuccessModalTest,
}) => {
  const dispatch = useDispatch();
  const { date } = useDiary();

  const handleClick = (event) => {
    event.preventDefault();
    toggleSuccessModal();
    toggleSuccessModalTest();
    dispatch(
      addExercises({
        date: date,
        credentials: {
          consumedProducts: [
            {
              product: productId,
              amount: amount,
              calories: caclCall,
            },
          ],
        },
      }),
    );
  };

  return (
    <div>
      <form>
        <div className={css.inputModalBox}>
          <input
            type="text"
            value={productData.title}
            className={css.modalInput}
            style={{ color: grayMiddle }}
            disabled
          />
          <div className={css.inputWeigthBox}>
            <input
              type="text"
              className={css.modalInputcall}
              onChange={handleChange}
            />
            <p className={css.toolTipWeigth}>grams</p>
          </div>
        </div>
        <p>
          <span style={{ color: grayForText }}>Calories: </span>
          {caclCall}
        </p>
      </form>
      <div className={css.buttonModalBox}>
        <ButtonModal
          btnType={'submit'}
          text={'Add to diary'}
          onClick={handleClick}
        />
        <button
          type="button"
          className={css.closeModalButton}
          onClick={toggleSuccessModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddProductForm;
