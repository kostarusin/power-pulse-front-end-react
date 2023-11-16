

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchByType } from '../../../redux/exercises/operations';
import { selectByType } from '../../../redux/exercises/selectors';
import css from './ExercisesList.module.css';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';

import Pagination from '../Pagination/Pagination';
import { PaginationContainer } from '../Pagination/Pagination.styled';

export const MusculesList = ({ handleFilterClick, handleSetExName}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchByType());
  }, [dispatch]);

  const exercises = useSelector(selectByType);

  const [currentPage, setCurrentPage] = useState(1);

  const determineItemsPerPage = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768 && windowWidth <= 1439) {
      return 9;
    } else {
      return 10;
    }
  };

  const [itemsPerPage, setItemsPerPage] = useState(determineItemsPerPage);

  const handleResize = () => {
    setItemsPerPage(determineItemsPerPage());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =exercises.muscles.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PaginationContainer>
      <ul className={css.exercisesUl}>
        {currentItems.map(item => (
          <ExercisesItem
            key={item._id}
            exercisesItem={item}
            handleFilterClick={handleFilterClick}
            handleSetExName={handleSetExName}
          />
        ))}
      </ul>
      {itemsPerPage < exercises.muscles.length && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={exercises.muscles.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </PaginationContainer>
  );
};

MusculesList.propTypes = {
  exercises: PropTypes.array,
};
