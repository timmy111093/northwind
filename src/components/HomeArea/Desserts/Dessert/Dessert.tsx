import React, { FC } from 'react';
import styles from './Dessert.module.scss';

interface DessertProps {
  name:string;
  price:number;
  children:React.ReactNode;
}

const Dessert: FC<DessertProps> = ({name,price,children}) => (
  <div className={styles.Dessert}>
    
    <span>Name: {name} </span>
    <span>Price: {price}</span>
    <div>{children}</div>
  </div>
);

export default Dessert;
