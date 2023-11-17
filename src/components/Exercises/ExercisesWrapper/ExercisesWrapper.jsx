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

  const handleSetExName = (name) => {
    setExerciseName(name);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const capitalizeFirstLeter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  return (
    <div className={css.exercisesWrapper}>
      <li className={css.exercisesBox}>
        {activeFilter !== 'Waist' ? (
          <h2 className={css.exercisesTitle}>Exercises</h2>
        ) : (
          <h2 className={css.exercisesTitle}>
            {capitalizeFirstLeter(exerciseName)}
          </h2>
        )}
        <ExercisesNavigation
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        />
      </li>
      {activeFilter === 'Body part' && (
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
