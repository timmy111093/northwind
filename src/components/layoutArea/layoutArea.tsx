import React, { FC } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Aside from './aside/aside';
import Main from './main/main';
import Discount from '../HomeArea/Discount/Discount';
import styles from './layoutArea.module.scss';

interface LayoutAreaProps {}

const LayoutArea: FC<LayoutAreaProps> = () => (
  <div className={styles.LayoutArea}>
    <Header />
    <Aside />
    <Main />
    <Footer />
  </div>
);

export default LayoutArea;
