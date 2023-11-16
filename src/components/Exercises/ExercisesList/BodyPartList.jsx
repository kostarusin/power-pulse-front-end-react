import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchByType } from '../../../redux/exercises/operations';
import css from './ExercisesList.module.css';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { useExercises } from '../../../redux/hooks';
import Pagination from '../Pagination/Pagination';
import { PaginationContainer } from '../Pagination/Pagination.styled';

export const BodyPartList = ({ handleFilterClick, handleSetExName }) => {
  const dispatch = useDispatch();

  const { bodyParts } = useExercises();

  useEffect(() => {
    dispatch(fetchByType());
  }, [dispatch]);

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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  console.log();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bodyParts.bodyParts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return (
    <PaginationContainer>
      <ul className={css.exercisesUl}>
        {currentItems.map((item) => (
          <ExercisesItem
            key={item._id}
            exercisesItem={item}
            handleFilterClick={handleFilterClick}
            handleSetExName={handleSetExName}
          />
        ))}
      </ul>
      {itemsPerPage < bodyParts.bodyParts.length && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={bodyParts.bodyParts.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </PaginationContainer>
  );
};

BodyPartList.propTypes = {
  bodyParts: PropTypes.array,
};
