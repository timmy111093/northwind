import React, { FC,useState } from 'react';
// import Discount from '../../HomeArea/Discount/Discount';
// import Special from '../../HomeArea/Special/Special';

import Recomendations from '../../HomeArea/Recomendations/Recomendations';
// import Desserts from '../../HomeArea/Desserts/Desserts';
import Sale from '../../HomeArea/sale/sale';
import Counter from '../../HomeArea/counter/counter';
import Input from '../../HomeArea/input/input';
import styles from './main.module.scss';
import Clock from '../../HomeArea/Clock/Clock';
import RandomDiscount from '../../HomeArea/randomDiscount/randomDiscount';



interface MainProps {}

const Main: FC<MainProps> = () => {

    let [counter,setCounter] = useState(0);
    const [value,setValue] = useState('');

  const increaseCounter = () => {
    setCounter((prevState) => prevState = prevState + 1);
  }
  const decreaseCounter = () => {
    setCounter((prevState) => {
      if(prevState === 0) return 0;
      return prevState = prevState - 1;
    });
  }
  return(
  <main className={styles.Main}>
    {/* <Discount /> */}
    {/* <Special /> */}
    {/* <Desserts /> */}
    <Recomendations />
    <Sale category="candies" percent={15}><div>this is a div</div></Sale>
    <Sale category="ice cream" percent={20} />
    <Counter counter={counter} onDecrease={decreaseCounter} onIncrease={increaseCounter} />
    <Input />
    
    {counter < 5 && <Clock value={value} />}
    <RandomDiscount />
  </main>
 );
}

export default Main;
