import { grayForText, grayMiddle } from "../../Helpers/helpers"
import { ButtonModal } from '../../../components/ButtonModal/ButtonModal';
import css from './AddProductForm.module.css';

const AddProductForm = ({toggleSuccessModal,handleChange,productData, caclCall}) => {
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
        <input
          type="text"
          className={css.modalInputcall}
          onChange={handleChange}
        />
      </div>
      <p>
        <span style={{ color: grayForText }}>Calories: </span>
        {caclCall}
      </p>
    </form>
    <div className={css.buttonModalBox}>
      <ButtonModal btnType={'submit'} text={'Add to diary'} />
      <button
        type="button"
        className={css.closeModalButton}
        onClick={toggleSuccessModal}
      >
        Cancel
      </button>
    </div>
  </div>
  )
}

export default AddProductForm