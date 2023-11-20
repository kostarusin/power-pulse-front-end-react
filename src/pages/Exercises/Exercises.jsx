import { useEffect, useState } from 'react';
import sprite from '../../assets/icons-optimized.svg';

import css from './Exercises.module.css';
import { ExercisesNavigation } from '../../components/Exercises/ExercisesNavigation/ExercisesNavigation';
import { BodyPartList } from '../../components/Exercises/ExercisesSubcategoriesList/BodyPartList';
import { ExercisesList } from '../../components/Exercises/ExercisesList/ExercisesList';
//redux
import { useDispatch } from 'react-redux';
import { fetchByType, fetchExercises } from '../../redux/exercises/operations';
import { useExercises } from '../../hooks';

const Exercises = () => {
  const [activeFilter, setActiveFilter] = useState('Body parts');
  const [exerciseName] = useState('');
  const [activeName, setActiveName] = useState(null);

  const { bodyParts } = useExercises();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchByType());
  }, [dispatch]);

  const capitalizeFirstLeter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className={css.div}>
      <div className={css.exercisesWrapper}>
        {activeName && (
          <button
            type="button"
            onClick={() => setActiveName('')}
            className={css.btnBack}
          >
            <svg className={css.svgBack} width={16} height={16}>
              <use href={sprite + '#icon-arrow-left'}></use>
            </svg>
            Back
          </button>
        )}
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
            setActiveName={setActiveName}
          />
        </div>
        {!activeName ? (
          <>
            {activeFilter === 'Body parts' && (
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
        ) : (
          <ExercisesList activeName={activeName} activeFilter={activeFilter} />
        )}
      </div>
    </div>
  );
};

export default Exercises;
