import { useEffect, useState } from 'react'; 
import PropTypes from 'prop-types'; 
import { useDispatch } from 'react-redux'; 
import { fetchByType } from '../../../redux/exercises/operations'; 
import css from './ExercisesList.module.css'; 
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { useExercises } from '../../../hooks'; 
import Pagination from '../Pagination/Pagination'; 
import { PaginationContainer } from '../Pagination/Pagination.styled'; 
 
export const BodyPartList = ({ handleFilterClick, handleSetExName }) => { 
  const dispatch = useDispatch(); 
 
  useEffect(() => { 
    dispatch(fetchByType()); 
  }, [dispatch]); 
 
  const { bodyParts } = useExercises(); 
 
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
  console.log(bodyParts.bodyPart, 'bodyParts.bodyPart'); 
  const currentItems = bodyParts.bodyPart 
    ? bodyParts.bodyPart.slice(indexOfFirstItem, indexOfLastItem) 
    : []; 
  console.log(currentItems)
 
  return ( 
    <PaginationContainer> 
      <ul className={css.exercisesUl}> 
        {currentItems.map((item) => ( 
          <ExercisesSubcategoriesItem 
            key={item._id} 
            exercisesItem={item} 
            handleFilterClick={handleFilterClick} 
            handleSetExName={handleSetExName} 
          /> 
        ))} 
      </ul> 
      {itemsPerPage < bodyParts.bodyPart && 
        itemsPerPage < bodyParts.bodyPart.length && ( 
          <Pagination 
            itemsPerPage={itemsPerPage} 
            totalItems={bodyParts.bodyPart.length} 
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