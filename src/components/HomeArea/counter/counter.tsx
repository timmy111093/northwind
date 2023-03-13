import React, { FC, useState } from 'react';
import styles from './counter.module.scss';

interface CounterProps {
  counter: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter: FC<CounterProps> = ({counter,onIncrease,onDecrease}) => {
    
  return (
    <div className={`Box ${styles.Counter}`}>
      <h2>{counter}</h2>
      <div className="buttons">
        <button onClick={onIncrease}> + </button>
        <button onClick={onDecrease}> - </button>
      </div>
    </div>
  );
}

export default Counter;
