import { grayForText, grayMiddle } from '../../Helpers/helpers';
import { ButtonModal } from '../../ButtonModal/ButtonModal';
import css from './AddProductForm.module.css';
import { useDispatch } from 'react-redux';
import { addExercises } from '../../../redux/dairy/operations';
import { useDiary } from '../../../hooks';
import { useEffect, useState } from 'react';

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
  const [isFormValid, setIsFormValid] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (!amount || amount.trim() === '') {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }
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

  const validateForm = () => {
    const amountValue = Number(amount);
    const isAmountString =
      typeof amount === 'string' || amount instanceof String;
    const isFormValid =
      isAmountString &&
      !isNaN(amountValue) &&
      amountValue >= 1 &&
      amountValue <= 3000 &&
      amount.trim() !== '';
    setIsFormValid(isFormValid);
  };

  useEffect(() => {
    if (hasInteracted) {
      validateForm();
    }
  }, [amount, hasInteracted]);

  const handleInputChange = (event) => {
    handleChange(event);
    setHasInteracted(true);
    if (!event.target.value) {
      setHasInteracted(false);
      setIsFormValid(true);
    }
  };

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div>
      <form>
        <div className={css.inputModalBox}>
          <input
            type="text"
            value={capitalizeFirstLetter(productData.title)}
            className={css.modalInput}
            style={{ color: grayMiddle }}
            disabled
          />
          <div className={css.inputWeigthBox}>
            <input
              type="text"
              className={css.modalInputcall}
              onChange={handleInputChange}
            />
            <p className={css.toolTipWeigth}>grams</p>
          </div>
          {!isFormValid && hasInteracted && amount && (
            <p className={css.warning}>
              Please enter a valid amount (1 to 3000)
            </p>
          )}
          {showError && (
            <p className={css.warning}>
              Please enter a valid amount (1 to 3000)
            </p>
          )}
        </div>
        <p>
          <span style={{ color: grayForText }}>Calories: </span>
          {isFormValid ? caclCall : 0}
        </p>
      </form>
      <div className={css.buttonModalBox}>
        <ButtonModal
          btnType={'submit'}
          text={'Add to diary'}
          onClick={handleClick}
          disabled={!isFormValid}
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
