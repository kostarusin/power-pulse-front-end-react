import { useState } from 'react';
import { BodyPartList } from '../ExercisesSubcategoriesList/BodyPartList';
import css from './ExercisesWrapper.module.css';
import { MusculesList } from '../ExercisesSubcategoriesList/MusculesList';
import { EquipmentList } from '../ExercisesSubcategoriesList/EquipmentList';
import { ExercisesNavigation } from '../ExercisesNavigation/ExercisesNavigation';
import { ExercisesList } from '../Exercises/ExercisesList/ExercisesList';

export const ExercisesMain = () => {
  const [activeFilter, setActiveFilter] = useState('Body parts');
  const [exerciseName, setExerciseName] = useState('');

  const handleSetExName = (name) => {
    setExerciseName(name);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  console.log(activeFilter)

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
      {activeFilter === 'Waist' && <ExercisesList exerciseName={exerciseName} />}
    </div>
  );
};
