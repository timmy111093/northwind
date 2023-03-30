import React, { FC } from 'react';
import styles from './start.module.scss';

interface StartProps {}

const Start: FC<StartProps> = () => (
  <div className={styles.Start}>
    Start Component
  </div>
);

export default Start;
