import React, { Children, FC } from 'react';
import Dessert from './Dessert/Dessert';
import styles from './Desserts.module.scss';

interface DessertsProps {}

const Desserts: FC<DessertsProps> = () => {

  const items = [
    {id:1,name:'IceCream',price:10},
    {id:2,name:'IceCream',price:20},
    {id:3,name:'IceCream',price:30},
    {id:4,name:'IceCream',price:40},
    {id:5,name:'IceCream',price:50}
  ];

  const _jsxItems = items.map((item) => {
    const {id,name,price} = item;
    return (
        <Dessert  name={name} price={price} key={id}>
          description
          </Dessert>
    ) 
  });

  return (
    <div className={`Box ${styles.Desserts}`}>
    Desserts:
    {_jsxItems}
  </div>
  )
}

export default Desserts;
