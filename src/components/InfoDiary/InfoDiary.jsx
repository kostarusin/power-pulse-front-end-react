import css from './InfoDiary.module.css';

const InfoDiary = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.svg}>svg</div>
      <div className={css.info}>
        Record all your meals in the calorie diary every day. This will help you
        be aware of your nutrition and make informed choices.
      </div>
    </div>
  );
};

export default InfoDiary;
