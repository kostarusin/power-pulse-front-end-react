import sprite from '../../assets/icons-optimized.svg';
import { Link, useMatch } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  const isErrorPage = useMatch('/error');

  return (
    <Link className={css.logoWrap} to={'/'}>
      <svg className={isErrorPage ? css.logoIconError : css.logoIcon}>
        <use href={`${sprite}#icon-logo-dumbbell`} />
      </svg>
      <svg className={css.logoText}>
        <use href={`${sprite}#icon-power-pulse`} />
      </svg>
    </Link>
  );
};

export default Logo;
