import React, { FC, ReactNode } from 'react';
import styles from './sale.module.scss';

interface SaleProps {
  category:string;
  percent: number;
  children?: ReactNode | undefined;
}

const Sale: FC<SaleProps> = (props) => {
 
  const {category,percent,children} = props;

  return (
    <div className={`Box ${styles.Sale}`}>
      <span>Sale: {percent}% discount on all</span>
      <p>category: {category}</p>
      <div className={styles.Sale__content}>
        {children}</div>
    </div>
  );

}

export default Sale;
