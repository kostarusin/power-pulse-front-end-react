import { useEffect, useState } from 'react';
import css from './BodyPartList.module.css';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import Pagination from '../Pagination/Pagination';
import { PaginationContainer } from '../Pagination/Pagination.styled';

export const BodyPartList = ({
  handleFilterClick,
  handleSetExName,
  setActiveName,
  filters,
}) => {
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
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filters
    ? filters.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  return (
    <PaginationContainer>
      <ul className={css.exercisesUl}>
        {currentItems.map((item) => (
          <ExercisesSubcategoriesItem
            key={item._id}
            exercisesItem={item}
            handleFilterClick={handleFilterClick}
            handleSetExName={handleSetExName}
            setActiveName={setActiveName}
          />
        ))}
      </ul>
      {filters && itemsPerPage < filters.length && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filters.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </PaginationContainer>
  );
};
