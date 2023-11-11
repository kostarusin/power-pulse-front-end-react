
import  css from './ExercisesList.module.css';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';


export const EquipmentList = () => {
  
      return (
        <>
          <ul className={css.exercisesUl}>
              <ExercisesItem/> 
              </ul>
              
            </>
          );
        };
       