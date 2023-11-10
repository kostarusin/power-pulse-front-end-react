import css from './DailyProgressItem.module.css';

const DailyProgressItem = ({ title, number }) => {
  return (
    <li>
      <div className={css.contaiterItem}>
        <div className={css.containerText}>
          <div className={css.svg}>svg</div>
          <div className={css.text}>{title}</div>
        </div>
        <div className={css.contaiterCount}>
          <div className={css.count}>{number}</div>
        </div>
      </div>
    </li>
  );
};

export default DailyProgressItem;
