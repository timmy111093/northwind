import React, { FC } from 'react';
import styles from './Discount.module.scss';

interface DiscountProps {}

const Discount: FC<DiscountProps> = () => {
  const percent = 10;
  return (
    <div className={`Box ${styles.Discount}`}>
    <span>Only now - {percent}% discount on all products! </span>
  </div>
  )
}

export default Discount;
