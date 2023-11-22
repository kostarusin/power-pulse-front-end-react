import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import sprite from '../../assets/icons-optimized.svg';

import css from './Exercises.module.css';
import { ExercisesNavigation } from '../../components/Exercises/ExercisesNavigation/ExercisesNavigation';
import { BodyPartList } from '../../components/Exercises/ExercisesSubcategoriesList/BodyPartList';
import { ExercisesList } from '../../components/Exercises/ExercisesList/ExercisesList';
import Loader from '../../components/Loader/index';
//redux
import { useDispatch } from 'react-redux';
import { fetchByType, fetchExercises } from '../../redux/exercises/operations';
import { useExercises } from '../../hooks';

const Exercises = () => {
  const [exerciseName] = useState('');
  const [activeName, setActiveName] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const { bodyParts } = useExercises();

  const dispatch = useDispatch();
  const location = useLocation();

  const { loading } = useExercises();

  const exercisesFiler = searchParams.get('filterName') || ''; // витягаємо із строки пошуку значення фільтру
  const exercisesCategoryFiler = searchParams.get('category') || '';

  useEffect(() => {
    dispatch(fetchExercises());
    dispatch(fetchByType());

    if (!searchParams.get('filterName')) {
      setSearchParams({ filterName: 'Body parts' });
    }
  }, [dispatch, searchParams]);

  const capitalizeFirstLeter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  const handleFilterClick = (filter) => {
    setSearchParams({ filterName: filter });
  };

  return (
    <div className={css.div}>
      {loading && <Loader />}
      <div className={css.exercisesWrapper}>
        <div className={css.head}>
          <div
            className={`${css.buttonsWrapper} ${
              activeName ? css.activeClass : ''
            }`}
          >
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
              {exercisesFiler !== 'Waist' ? (
                <h2 className={css.exercisesTitle}>Exercises</h2>
              ) : (
                <h2 className={css.exercisesTitle}>
                  {capitalizeFirstLeter(exerciseName)}
                </h2>
              )}
            </div>
          </div>
          <ExercisesNavigation
            exercisesFiler={exercisesFiler}
            handleFilterClick={handleFilterClick}
            setActiveName={setActiveName}
          />
        </div>

        {!activeName ? (
          <>
            {exercisesFiler === 'Body parts' && (
              <BodyPartList
                handleFilterClick={handleFilterClick}
                setActiveName={setActiveName}
                filters={bodyParts.bodyPart}
              />
            )}
            {exercisesFiler === 'Muscules' && (
              <BodyPartList
                handleFilterClick={handleFilterClick}
                setActiveName={setActiveName}
                filters={bodyParts.muscles}
              />
            )}
            {exercisesFiler === 'Equipment' && (
              <BodyPartList
                handleFilterClick={handleFilterClick}
                setActiveName={setActiveName}
                filters={bodyParts.equipment}
              />
            )}
          </>
        ) : (
          <ExercisesList
            loading={loading}
            activeName={activeName}
            location={location}
            exercisesFiler={exercisesFiler}
          />
        )}
      </div>
    </div>
  );
};

export default Exercises;
