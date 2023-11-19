import { useEffect, useState } from 'react';
import style from './Exercises.module.css';
import { ExercisesNavigation } from '../../components/Exercises/ExercisesNavigation/ExercisesNavigation';
import { BodyPartList } from '../../components/Exercises/ExercisesSubcategoriesList/BodyPartList';
import { ExercisesList } from '../../components/Exercises/Exercises/ExercisesList/ExercisesList';
//redux
import { useDispatch } from 'react-redux';
import { fetchByType, fetchExercises } from '../../redux/exercises/operations';
import { useExercises } from '../../hooks';
import css from './ExercisesWrapper.module.css';

const Exercises = () => {
  const [activeFilter, setActiveFilter] = useState('Body parts');
  const [exerciseName, setExerciseName] = useState('');
  const [activeName, setActiveName] = useState(null);
  const { bodyParts } = useExercises();
  const dispatch = useDispatch();
  console.log(activeName);
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
    <div className={style.div}>
      <div className={css.exercisesWrapper}>
        <div className={css.exercisesBox}>
          {activeName && (
            <button type="button" onClick={() => setActiveName('')}>
              Back
            </button>
          )}
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
          <ExercisesList activeName={activeName} />
        )}
      </div>
    </div>
  );
};

export default Exercises;
