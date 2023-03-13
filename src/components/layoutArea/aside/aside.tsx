import React, { FC } from 'react';
import styles from './aside.module.scss';

interface AsideProps {}

const Aside: FC<AsideProps> = () => (
  <aside className={styles.Aside}>
    <nav>
      <a href="#">Home</a>
      <a href="#">Products</a>
      <a href="#">About</a>
    </nav>
  </aside>
);

export default Aside;
