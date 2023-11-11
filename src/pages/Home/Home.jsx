import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  return (
    <div>
      <section className={css.hero}>
        <div className={css.image}>
          <div className={css.statistic1}>
            <div className={css.boxsvg1}>
              <svg width="20" height="20">
                <use href="/src/assets/icons-optimized.svg#icon-play"></use>
              </svg>
            </div>
            <div className={css.boxp}>
              <p className={css.number1}>350+</p>
              <p className={css.vid}>Video tutorial</p>
            </div>
          </div>
          <div className={css.statistic2}>
            <div className={css.boxsvg2}>
              <svg width="16" height="16">
                <use href="/src/assets/icons-optimized.svg#icon-running-figure"></use>
              </svg>
            </div>
            <p className={css.number2}>500</p>
            <p className={css.cal}>cal</p>
          </div>
        </div>

        <div className={css.container}>
          <div className={css.wrapper}>
            <h1 className={css.title}>
              Transforming your body shape with Power Pulse
            </h1>
            <div className={css.overlay}></div>
          </div>

          <ul className={css.list}>
            <li className={css.item}>
              <button type="submit" className={css.button}>
                {' '}
                <NavLink to="/login"></NavLink>
                Sign Up
              </button>
            </li>
            <li className={css.item}>
              <button type="submit" className={css.button}>
                <NavLink to="/register"></NavLink>
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
