

import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { css } from './ExercisesList.module.css';


export const MusculesList = () => {


  
  return (
   
      <ul className={css.exercisesUl}>
       
          <ExercisesItem/>
      </ul>
     
   
  );
};

