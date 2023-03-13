import React, { FC } from 'react';
import styles from './Special.module.scss';

interface SpecialProps {}

const Special: FC<SpecialProps> = () => (
  <div className={`Box ${styles.Special}`}>

  </div>
);

export default Special;
