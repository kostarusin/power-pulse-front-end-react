
import css from "./ExercisesList.module.css";


import { ExercisesItem } from '../ExercisesItem/ExercisesItem';

export const BodyPartList = () => {

  return (
    <div>
      <ul className={css.exercisesUl}>
       
          <ExercisesItem/>
    
      </ul>
      
    </div>
  );
};
