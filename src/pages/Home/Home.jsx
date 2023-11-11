import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  return (
    <div>
      <section className={css.hero}>
        <div className={css.image}></div>
        {/* <div className={statistic}></div> */}
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
