import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector} from 'react-redux';
import { fetchByType} from '../../../redux/exercises/operations';
import { selectByType } from '../../../redux/exercises/selectors';
import { ExercisesUl } from './ExercisesList.styled';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';

import Pagination from '../Pagination/Pagination';
import { PaginationContainer } from '../Pagination/Pagination.styled';

export const BodyPartList = ({ handleFilterClick, handleSetExName }) => {
  const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchByType());
  }, [dispatch]);

  const data = useSelector(selectByType);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(data);
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
  const currentItems = data.bodyParts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PaginationContainer>
      <ExercisesUl>
        {currentItems.map((item) => (
          <ExercisesItem
            key={item._id}
            exercisesItem={item}
            handleFilterClick={handleFilterClick}
            handleSetExName={handleSetExName}
          />
        ))}
      </ExercisesUl>
      {itemsPerPage < data.length && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
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
