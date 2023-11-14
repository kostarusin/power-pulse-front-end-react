import { useState } from 'react';
import { BodyPartList } from '../ExercisesList/BodyPartList';
import {
  ExercisesTitle,
  ExercisesWrapper,
  ExercisesBox,
} from './ExercisesWrapper.styled';
//import { MusculesList } from '../ExercisesList/MusculesList';
//import { EquipmentList } from '../ExercisesList/EquipmentList';
import { ExercisesNavigation } from '../ExercisesNavigation/ExercisesNavigation';


export const ExercisesWrap = () => {
  const [activeFilter, setActiveFilter] = useState('Body parts');
  const [exerciseName, setExerciseName] = useState('');

  const handleSetExName = name => {
    setExerciseName(name);
  };

  const handleFilterClick = filter => {
    setActiveFilter(filter);
  };

  const capitalizeFirstLeter = string => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  return (
    <ExercisesWrapper>
      <ExercisesBox>
        
          <ExercisesTitle>Exercises</ExercisesTitle>
      
          <ExercisesTitle>{capitalizeFirstLeter(exerciseName)}</ExercisesTitle>
       
        <ExercisesNavigation
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        />
      </ExercisesBox>
      {activeFilter === 'Body part' && (
        <BodyPartList
          handleFilterClick={handleFilterClick}
          handleSetExName={handleSetExName}
        />
      )}
      {/* {activeFilter === 'Muscules' && (
        <MusculesList
          handleFilterClick={handleFilterClick}
          handleSetExName={handleSetExName}
        />
      )} */}
      {/* {activeFilter === 'Equipment' && (
        <EquipmentList
          handleFilterClick={handleFilterClick}
          handleSetExName={handleSetExName}
        />
      )}
       */}
    </ExercisesWrapper>
  );
};
