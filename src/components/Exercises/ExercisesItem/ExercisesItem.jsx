import { useState } from 'react';
//components
import { Modal } from '../../Modal/Modal';
import { AddExerciseForm } from '../../AddExerciseForm/AddExerciseForm';
import { AddExerciseSuccess } from '../../AddExerciseSuccess/AddExerciseSuccess';
//stele
import css from './WaistItem.module.css';
import icons from '../../../assets/icons.svg';

const texts = {
  cardLabel: 'Workout',
  btnLabel: 'Start',
  list: {
    burnedCalories: 'Burned calories:',
    bodyPart: 'Body part:',
    target: 'Target:',
  },
};

export const ExercisesItem = ({ data, location }) => {
  const [showExerciseModal, setShowExerciseModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [exercise, setExercise] = useState({});
  const capitalizeFirstLeter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  const toggleExerciseModal = () => {
    setShowExerciseModal((prevState) => !prevState);
    if (showExerciseModal === true) {
      document.body.style.overflow = 'auto';
    }
    if (showExerciseModal === false) {
      document.body.style.overflow = 'hidden';
    }
  };

  const toggleSuccessModal = () => {
    setShowSuccessModal((prevState) => !prevState);
    if (showSuccessModal === true) {
      document.body.style.overflow = 'auto';
    }
    if (showSuccessModal === false) {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <li className={css.waistItemLi}>
      <div className={css.btnWrapper}>
        <p className={css.cardLabel}>{texts.cardLabel}</p>
        <button
          className={css.btnLabel}
          type="button"
          onClick={toggleExerciseModal}
        >
          {texts.btnLabel}
            <svg className={css.svgExercise}>
              <use href={`${icons}#icon-add-arrow`}></use>
            </svg>
         </button>
      </div>
      <div className={css.exercisesTitleBox}>
        <span className={css.spanExerciseRun}>
          <svg className={css.svgExerciseRun} width={24} height={24}>
            <use href={`${icons}#icon-runn ing-figure`}></use>
            <use
              href={`${icons}#icon-running-stick-figure-svgrepo-com-1`}
            ></use>
          </svg>
        </span>
        <h3 className={css.title}>{capitalizeFirstLeter(data.name)} </h3>
      </div>
      {showExerciseModal && (
        <Modal onClose={toggleExerciseModal}>
          <AddExerciseForm
            exercise={data}
            toggleExerciseModal={toggleExerciseModal}
            toggleSuccessModal={toggleSuccessModal}
            setExercise={setExercise}
          />
        </Modal>
      )}
      {showSuccessModal && (
        <Modal onClose={toggleSuccessModal}>
          <AddExerciseSuccess
            exercise={exercise}
            toggleSuccessModal={toggleSuccessModal}
            location={location}
          />
        </Modal>
      )}

      <ul className={css.list}>
        {Object.keys(texts.list).map((e) => (
          <li className={css.listItem} key={e}>
            {texts.list[e]}
            <span className={css.listItemValue}>
              {capitalizeFirstLeter(String(data[e]))}
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
};
