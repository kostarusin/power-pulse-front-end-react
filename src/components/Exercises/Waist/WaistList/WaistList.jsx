import { useDispatch, useSelector } from 'react-redux';
import { WaistItem } from '../WaistItem/WaistItem';
import css from './WaistList.module.css';
import { useState } from 'react';
import { selectExercises } from '../../../../redux/exercises/selectors';
import { useEffect } from 'react';
import { fetchExercises } from '../../../../redux/exercises/operations';
import images from '../img/Waist1.jpg';
import { Modal } from '../../../Modal/Modal';
import { AddExerciseSuccess } from '../../../AddExerciseSuccess/AddExerciseSuccess';
import { AddExerciseForm } from '../../../AddExerciseForm/AddExerciseForm';

export const WaistList = () => {
  const [modalChange, setModalChange] = useState('');
  const [modalData, setModalData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const openModalToggle = (el) => {
    setModalData(el);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const changeModal = () => {
    setModalChange('well');
  };

  const exercises = useSelector(selectExercises);
  console.log(exercises);
  const visibleExercises = exercises.filter(
    (exercise) =>
      exercise.bodyPart || exercise.muscles || exercise.equipment === '',
  );

  return (
    <>
      {modalData && (
        <Modal toggleExerciseModal={closeModal}>
          {modalChange !== 'well' ? (
            <AddExerciseForm
              data={modalData}
              closeModal={closeModal}
              onClick={changeModal}
            />
          ) : (
            <AddExerciseSuccess
              closeModal={closeModal}
              data={modalData}
              onClick={closeModal}
            />
          )}
        </Modal>
      )}
      <div className={css.waistContainer}>
        <ul className={css.waistItemUl}>
          {visibleExercises.length ? (
            visibleExercises
              .slice(0, 50)
              .map((el) => (
                <WaistItem
                  key={el._id}
                  data={el}
                  openModalToggle={openModalToggle}
                />
              ))
          ) : (
            <h2 className={css.noExercisesTitle}>
              There is not exercises downloaded else, please try choose this
              categorie later!!!
            </h2>
          )}
        </ul>
        <img className={css.imgWaist} src={images} alt="image" />
      </div>
    </>
  );
};
