import css from './ExercisesList.module.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import Pagination from '../Pagination/Pagination';
import { PaginationContainer } from '../Pagination/Pagination.styled';
import { useDispatch} from 'react-redux';
import { fetchExercises } from '../../../redux/exercises/operations';
//import { selectExercises } from '../../../redux/exercises/selectors';
import { useExercises } from '../../../redux/hooks';
export const BodyPartList = ({ handleFilterClick, handleSetExName }) => {
  const dispatch = useDispatch();
  const { exercises } = useExercises();
  console.log("lilya",exercises);
  
  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  //const exercises = useSelector(selectExercises);

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
  const currentItems = exercises.bodyPart.slice(indexOfFirstItem, indexOfLastItem);
console.log(currentItems)
  return (
    <PaginationContainer>
      <div>
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
        {itemsPerPage < exercises.bodyPart.length && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={exercises.bodyPart.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </PaginationContainer>
  );
};

BodyPartList.propTypes = {
  bodyParts: PropTypes.array,
};
