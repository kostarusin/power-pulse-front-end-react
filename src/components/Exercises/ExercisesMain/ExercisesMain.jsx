import { useState } from 'react';
import { useExercises } from '../../../hooks';
import { BodyPartList } from '../ExercisesSubcategoriesList/BodyPartList';
import css from './ExercisesWrapper.module.css';
import { ExercisesNavigation } from '../ExercisesNavigation/ExercisesNavigation';
import { ExercisesList } from '../Exercises/ExercisesList/ExercisesList';

export const ExercisesMain = ({ setActiveName, activeName }) => {
  const { bodyParts } = useExercises();

  return (
    <>
      <div className={css.exercisesWrapper}>
        <div className={css.exercisesBox}>
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
        </div>
        <>
          {activeName && activeFilter === 'Body parts' && (
            <BodyPartList
              handleFilterClick={handleFilterClick}
              setActiveName={setActiveName}
              filters={bodyParts.bodyPart}
            />
          )}
          {activeFilter === 'Muscules' && (
            <BodyPartList
              handleFilterClick={handleFilterClick}
              setActiveName={setActiveName}
              filters={bodyParts.muscles}
            />
          )}
          {activeFilter === 'Equipment' && (
            <BodyPartList
              handleFilterClick={handleFilterClick}
              setActiveName={setActiveName}
              filters={bodyParts.equipment}
            />
          )}
        </>
      </div>
    </>
  );
};
