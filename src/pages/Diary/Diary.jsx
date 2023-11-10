//components
import StyledDatepicker from '../../components/Datepicker/StyledDatepicker';
import DailyProgressList from '../../components/DailyProgressList/DailyProgressList';
import InfoDiary from '../../components/InfoDiary/InfoDiary';
import MyProductsDiary from '../../components/MyProductsDiary/MyProductsDiary';

//styles
import css from './Diary.module.css';

const daily = [
  { title: 'Artem Artem Artem Artem', number: 30 },
  { title: 'Artem', number: 30 },
  { title: 'Artem', number: 30 },
  { title: 'Artem', number: 30 },
  { title: 'Artem', number: 30 },
  { title: 'Artem', number: 30 },
];

const Diary = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.wrapperTitle}>
        <div className={css.title}>Diary</div>
        <StyledDatepicker />
      </div>

      <DailyProgressList data={daily} />
      <InfoDiary />
      <MyProductsDiary />
    </div>
  );
};

export default Diary;
