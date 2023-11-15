import { useDispatch, useSelector } from 'react-redux';
import { WaistItem } from '../WaistItem/WaistItem';
import {
  WaistItemUl,
  NoExercisesTitle,
  WaistListContainer,
  ImgWaist,
} from './WaistList.styled';
import { selectExercises } from '../../../../redux/exercises/selectors';
import { useEffect } from 'react';
import { fetchExercises } from '../../../../redux/exercises/operations';
import images from '../../../../images/waist-1x.jpg';
import { useState } from 'react';

export const WaistList = ({ exerciseName }) => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  
  const exercises = useSelector(selectExercises);
  const visibleExercises = exercises.filter(
    exercise =>
      exercise.bodyPart ||
      exercise.target ||
      exercise.equipment === exerciseName,
  );
  return (
    <>
 
      <WaistListContainer>
        <WaistItemUl>
          {visibleExercises.length ? (
            visibleExercises
              .slice(0, 50)
              .map(el => (
                <WaistItem
                  key={el._id}
                  data={el}
                  
                />
              ))
          ) : (
            <NoExercisesTitle>
              There is not exercises downloaded else, plaese try choose this
              categorie later!!!
            </NoExercisesTitle>
          )}
        </WaistItemUl>
        <ImgWaist src={images} alt="image" />
      </WaistListContainer>
    </>
  );
};