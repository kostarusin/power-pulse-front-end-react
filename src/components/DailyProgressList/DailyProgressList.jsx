import DailyProgressItem from '../DailyProgressItem/DailyProgressItem';
import css from './DailyProgressList.module.css';

const DailyProgressList = ({ data }) => {
  return (
    <ul className={css.wrapperList}>
      {data.map(({ title, number }, index) => (
        <DailyProgressItem key={index} title={title} number={number} />
      ))}
    </ul>
  );
};

export default DailyProgressList;
