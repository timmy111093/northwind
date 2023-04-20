import React, { FC } from 'react';
import AuthMenu from '../../AuthArea/AuthMenu/AuthMenu';
import styles from './header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header className={styles.Header}>
    <AuthMenu />
    <h1>Northwind</h1>
  </header>
);

export default Header;
