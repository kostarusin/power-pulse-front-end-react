import { useDispatch, useSelector } from 'react-redux';
import { WaistItem } from '../WaistItem/WaistItem';
import {
  WaistItemUl,
  NoExercisesTitle,
  WaistListContainer,
  ImgWaist,
} from './WaistList.styled';
import { useState } from 'react';
import { selectByType, selectExercises } from '../../../../redux/exercises/selectors';
import { useEffect } from 'react';
import { fetchByType} from '../../../../redux/exercises/operations';
import images from '../../Waist/img/Waist1.jpg';
import { Modal } from '../../../Modal/Modal';
import { AddExerciseSuccess } from '../../../AddExerciseSuccess/AddExerciseSuccess';
import { AddExerciseForm } from '../../../AddExerciseForm/AddExerciseForm';
import { useExercises } from '../../../../redux/hooks';
export const WaistList = ({exerciseName}) => {
  const [modalChange, setModalChange] = useState('');
  const [modalData, setModalData] = useState(null);


  const dispatch = useDispatch();

  const {bodyParts}=useExercises();
   console.log(bodyParts.bodyParts)
  useEffect(() => {
   dispatch(fetchByType());
 }, [dispatch]);
 


const array=bodyParts.bodyParts.concat(bodyParts.equipment);
const exercises=array.concat(bodyParts.muscles)
console.log(exercises)
  const visibleExercises = exercises.filter(
    exercise =>
      exercise.bodyParts ||
      exercise.muscles ||
      exercise.equipment === exerciseName,
  );
  const openModalToggle = el => {
    setModalData(el);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const changeModal = () => {
    setModalChange('well');
  };

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
        <ImgWaist src={images} alt="image" />
      </WaistListContainer>
    </>
  );
};