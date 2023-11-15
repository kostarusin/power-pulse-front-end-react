import sprite from '../../assets/icons-optimized.svg';
import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <Link className={css.logoWrap} to={'/'}>
      <svg className={css.logoIcon}>
        <use href={`${sprite}#icon-logo-large-img`} />
      </svg>
      <svg className={css.logoText}>
        <use href={`${sprite}#icon-logo-large-text`} />
      </svg>
    </Link>
  );
};

export default Logo;
