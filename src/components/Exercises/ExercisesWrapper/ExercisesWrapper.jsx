import { useState } from 'react';
import { BodyPartList } from '../ExercisesList/BodyPartList';
import css from './ExercisesWrapper.module.css';
import { MusculesList } from '../ExercisesList/MusculesList';
import { EquipmentList } from '../ExercisesList/EquipmentList';
import { ExercisesNavigation } from '../ExercisesNavigation/ExercisesNavigation';
import { WaistList } from '../Waist/WaistList/WaistList';


export const ExercisesWrap = () => {
  const [activeFilter, setActiveFilter] = useState('Body part');
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
    <div className={css.exercisesWrapper}>
      <li className={css.exercisesbox}>
      {activeFilter !== 'Waist' ? (
          <h2 className={css.exercisesBox}>Exercises</h2>
          ) : (
          <h2 className={css.exercisesBox}>{capitalizeFirstLeter(exerciseName)}</h2>
          )}
        <ExercisesNavigation
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        />
      </li>
      {activeFilter === 'Body parts' && (
        <BodyPartList
          handleFilterClick={handleFilterClick}
          handleSetExName={handleSetExName}
        />
      )}
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
       {activeFilter === 'Waist' && <WaistList exerciseName={exerciseName} />}
    </div>
  );
};
