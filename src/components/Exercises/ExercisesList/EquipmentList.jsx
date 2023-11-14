import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExercises } from '../../../redux/exercises/operations';
import { selectExercises } from '../../../redux/exercises/selectors';
import { ExercisesUl } from './ExercisesList.styled';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';

import Pagination from '../Pagination/Pagination';
import { PaginationContainer } from '../Pagination/Pagination.styled';

export const EquipmentList = ({ handleFilterClick, handleSetExName }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const exercises = useSelector(selectExercises);
  const [currentPage, setCurrentPage] = useState(1);

  const determineItemsPerPage = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768 && windowWidth <= 1439) {
      return 9;
    } else if (windowWidth < 375 || windowWidth >= 1440) {
      return 10;
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
  const currentItems = exercises.equipment.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PaginationContainer>
      <ExercisesUl>
        {currentItems.map(item => (
          <ExercisesItem
            key={item._id}
            exercisesItem={item}
            handleFilterClick={handleFilterClick}
            handleSetExName={handleSetExName}
          />
        ))}
      </ExercisesUl>
      {itemsPerPage < exercises.equipment.length && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={exercises.equipment.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </PaginationContainer>
  );
};

EquipmentList.propTypes = {
  equipment: PropTypes.array,
};
