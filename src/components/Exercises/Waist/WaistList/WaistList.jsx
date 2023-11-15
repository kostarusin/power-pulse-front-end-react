import { useDispatch, useSelector } from 'react-redux';
import { WaistItem } from '../WaistItem/WaistItem';
import {
  WaistItemUl,
  NoExercisesTitle,
  WaistListContainer,
  ImgWaist,
} from './WaistList.styled';
import { useState } from 'react';
import {selectExercises } from '../../../../redux/exercises/selectors';
import { useEffect } from 'react';
import { fetchExercises} from '../../../../redux/exercises/operations';
import images from '../img/Waist1.jpg';
import { Modal } from '../../../Modal/Modal';
import { AddExerciseSuccess } from '../../../AddExerciseSuccess/AddExerciseSuccess';
import { AddExerciseForm } from '../../../AddExerciseForm/AddExerciseForm';

export const WaistList = ({exerciseName}) => {
  const [modalChange, setModalChange] = useState('');
  const [modalData, setModalData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const openModalToggle = el => {
    setModalData(el);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const changeModal = () => {
    setModalChange('well');
  };

  const exercises = useSelector(selectExercises);
  console.log(exercises)
  const visibleExercises = exercises.filter(
    exercise =>
      exercise.bodyPart ||
      exercise.muscles ||
      exercise.equipment === exerciseName,
  );


  return (
    <>
 {modalData && (
  <Modal isOpenModalToggle={closeModal}>
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
          </Modal>)}
      <WaistListContainer>
        <WaistItemUl>
          {visibleExercises.length ? (
            visibleExercises
              .slice(0, 50)
              .map(el => (
                <WaistItem
                  key={el._id}
                  data={el}
                  openModalToggle={openModalToggle}
                />
              ))
          ) : (
            <NoExercisesTitle>
              There is not exercises downloaded else, please try choose this
              categorie later!!!
            </NoExercisesTitle>
        )}
        </WaistItemUl>
        {/* <ImgWaist src={images} alt="image" /> */}
      </WaistListContainer>
    </>
  );
};