import React, { FC } from 'react';
import styles from './Recomendations.module.scss';

interface RecomendationsProps {}

// get onClick react event
const Recomendations: FC<RecomendationsProps> = () => {
  const firstButton = () => {
    console.log(123);
  }
  // get the inner html
  const secondButton = (e:React.MouseEvent<HTMLButtonElement>) =>{
    const button = e.target as HTMLElement;
    const html = button.innerHTML;
    console.log(html);
  }

  // get any type with react event by other function
  const thirdButton = (id:string) => {
    console.log(id);
  }
  return (
    <div className={`Box ${styles.Recomendations}`}>
    Recomendations
    <button onClick={firstButton} className='Box'>First</button>
    <button onClick={secondButton} className='Box'>Second</button>
    <button onClick= {() => thirdButton('hello')} className='Box'>Third</button>
  </div>
  )
}

export default Recomendations;
