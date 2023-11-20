import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import HomeBackground from '../../components/HomeBackground/HomeBackground';
import io from 'socket.io-client';

const Home = () => {
  const socket = io('https://power-pulse-fx29.onrender.com');
  const [countuUsers, setCountUsers] = useState(null);

  useEffect(() => {
    socket.emit('getUsers');
    socket.on('totalUsers', (allUsers) => {
      console.log(allUsers);
      setCountUsers(allUsers);
    });
  }, [socket]);

  return (
    <section className={`layoutContainer ${css.hero}`}>
      <div className={css.container}>
        <h1 className={css.title}>
          Transforming your body shape with Power Pulse
        </h1>
        <div className={css.overlay}></div>

        <ul className={css.list}>
          <li>
            <NavLink to="/register" className={css.link1}>
              Sign Up
            </NavLink>
          </li>
          <li>
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
