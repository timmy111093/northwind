import React, { FC } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Aside from './aside/aside';
import Main from './main/main';
import Discount from '../HomeArea/Discount/Discount';
import styles from './layoutArea.module.scss';
import UserProvider from '../../context/Provider';

interface LayoutAreaProps {}

const LayoutArea: FC<LayoutAreaProps> = () => (
  <div className={styles.LayoutArea}>
    <UserProvider>
    <Header />
    <Aside />
    <Main />
    <Footer />
    </UserProvider>
  </div>
);

export default LayoutArea;
