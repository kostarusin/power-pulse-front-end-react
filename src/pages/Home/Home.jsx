import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import HomeBackground from '../../components/HomeBackground/HomeBackground';

const Home = () => {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <h1 className={css.title}>
            Transforming your body shape with Power Pulse
          </h1>
          <div className={css.overlay}></div>
        </div>

        <ul className={css.list}>
          <li className={css.item}>
            <NavLink to="/register" className={css.link1}>
              Sign Up
            </NavLink>
          </li>
          <li className={css.item}>
            {' '}
            <NavLink to="/login" className={css.link2}>
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
      <HomeBackground />
    </section>
  );
};

export default Home;
