import css from './ExercisesWrapper.module.css';
import { BodyPartList } from '../ExercisesList/BodyPartList';
import { MusculesList } from '../ExercisesList/MusculesList';
import { EquipmentList } from '../ExercisesList/EquipmentList';
import { ExercisesNavigation } from '../ExercisesNavigation/ExercisesNavigation';
import { useState } from 'react';


export const ExercisesWrapper = () => {
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
    <div className={css.wrapper}>
      <li className={css.exercises_box}>
     
        <h2 className={css.exercises_title}>Exercises</h2>  
        <h2 className={css.exercises_title}>{capitalizeFirstLeter(exerciseName)}</h2>  
<ExercisesNavigation
activeFilter={activeFilter}
handleFilterClick={handleFilterClick} />
      </li>
      {activeFilter === 'Body part' && (
      <BodyPartList 
       handleFilterClick={handleFilterClick}
       handleSetExName={handleSetExName}
       />)}
 {activeFilter === 'Muscules' && (
        <MusculesList
          handleFilterClick={handleFilterClick}
          handleSetExName={handleSetExName}
        />
      )}
      {activeFilter === 'Equipment' && (
        <EquipmentList
          handleFilterClick={handleFilterClick}
          handleSetExName={handleSetExName}
        />
      )}
     </div>
  );
};
