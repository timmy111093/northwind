import React, { FC } from 'react';
import styles from './header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header className={styles.Header}>
    <h1>Northwind</h1>
  </header>
);

export default Header;
