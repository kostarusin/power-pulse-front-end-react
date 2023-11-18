import { NavLink } from 'react-router-dom';
import HomeBackground from '../../components/HomeBackground/HomeBackground';
import css from './Error.module.css';

const ErrorPage = () => {
  return (
    <section className={css.error}>
      <div className={css.container1}>
        <div className={`layoutContainer ${css.container2}`}>
          <h1 className={css.title}>404</h1>
          <p className={css.text}>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </p>

          <NavLink to="/" className={css.link}>
            Go Home
          </NavLink>
        </div>
      </div>

      <div className={css.image}></div>
    </section>
  );
};

export default ErrorPage;
