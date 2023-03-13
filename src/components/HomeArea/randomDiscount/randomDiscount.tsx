import React, { FC, useState } from 'react';
import styles from './randomDiscount.module.scss';

interface RandomDiscountProps {}

const RandomDiscount: FC<RandomDiscountProps> = () => {
  const [randomDiscount,setRandomDiscount] = useState(0);
  const generateRandDiscount = () => {
    const random = Math.floor(Math.random() * 100);
    setRandomDiscount(random)
  }
  const discountStr = randomDiscount > 0 ? `${randomDiscount}%` : 0;
  return (
    <div className={`Box ${styles.RandomDiscount}`}>
      <button onClick={generateRandDiscount}>display discount</button><br />
      <span>Random Discount: {discountStr}</span>
    </div>
  );
}

export default RandomDiscount;
