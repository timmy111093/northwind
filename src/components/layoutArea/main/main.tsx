import React, { FC } from 'react';
import Router from '../../Router/Router';
// import Home from '../../HomeArea/Home/Home';
import styles from './main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => {

  return(
  <main className={styles.Main}>
  <Router />
  </main>
 );
}

export default Main;
