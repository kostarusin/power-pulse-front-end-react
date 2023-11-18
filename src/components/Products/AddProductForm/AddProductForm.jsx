import { grayForText, grayMiddle } from '../../Helpers/helpers';
import { ButtonModal } from '../../../components/ButtonModal/ButtonModal';
import css from './AddProductForm.module.css';
import { useState } from 'react';

const AddProductForm = ({
  toggleSuccessModal,
  handleChange,
  productData,
  caclCall,
}) => {
  const [addProductToDiary, setAddProductToDiary] = useState({
    product: '',
    amount: '',
    calories: '',
  });

  const handleClick = (event) => {
    event.preventDefault();
    setAddProductToDiary({
      product: '',
      amount: '',
      calories: caclCall,
    })
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
