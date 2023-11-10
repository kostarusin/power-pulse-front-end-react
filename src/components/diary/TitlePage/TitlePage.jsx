import React from 'react';
import css from './TitlePage.module.css';

function TitlePage({ title }) {
  return (
      <h1 className={css.titleContainer}>{title} </h1>
  );
}

export default TitlePage;
