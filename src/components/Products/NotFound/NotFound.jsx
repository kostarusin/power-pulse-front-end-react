import { orangeDark } from '../../Helpers/helpers';
import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={css.notFound}>
      <span className={css.notFound1}>
        <span style={{ color: orangeDark }}>Sorry, no results were found </span>
        for the product filters you selected. You may want to consider other
        search options to find the product you want. Our range is wide and you
        have the opportunity to find more options that suit your needs.
      </span>
      <span style={{ color: orangeDark }}>
        Try changing the search parameters.
      </span>
    </div>
  );
};

export default NotFound;
