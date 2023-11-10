import styles from './TableExercises.module.css';

function TableExercises({ exercises }) {
  const listOfExercises = exercises?.map(obj => {
    return (
      <tr key={obj._id}>
        <td className={styles.tdBodyPart}>
          <div>{obj.exercise.bodyPart}</div>
        </td>
        <td className={styles.tdEquipment}>
          <div>{obj.exercise.equipment}</div>
        </td>
        <td className={styles.tdName}>
          <div>{obj.exercise.name}</div>
        </td>
        <td className={styles.tdTarget}>
          <div>{obj.exercise.target}</div>
        </td>
        <td className={styles.tdBurnedCalories}>
          <div>
            {Math.round(
              (obj.exercise.burnedCalories / obj.exercise.time) * obj.duration
            )}
          </div>
        </td>
        <td className={styles.tdTime}>
          <div>{obj.duration}</div>
        </td>

        <td className={styles.tdDellete}>
          <button type="button">
            <div>sv</div>
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      {listOfExercises?.length > 0 ? (
        <div className={styles.DayExercises}>
          <div className={styles.DayExercisesTable}>
            <table>
              <thead>
                <tr>
                  <th className={styles.thBodyPart}>Body Part</th>
                  <th className={styles.thEquipment}>Equipment</th>
                  <th className={styles.thName}>Name</th>
                  <th className={styles.thTarget}>Target</th>
                  <th className={styles.thBurnedCalories}>Burned Calories</th>
                  <th className={styles.thTime}>Time</th>
                </tr>
              </thead>
              <tbody>{listOfExercises}</tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className={styles.DayExercises}>
          <div className={styles.DayExercisesTable}>
            <p className={styles.not_found}>Not found exercises</p>
          </div>
        </div>
      )}
    </>
  );
}

export default TableExercises;
