import React, { FC, useContext, useState, useMemo } from 'react';
import { UserContext } from '../../../context/Provider';
import styles from './About.module.scss';

const expensive = () => {
  console.log('expensive fn');
  const numbers:number[] = [];

  for(let i = 0; i < 1000; i++){
    numbers.push(i);
  }
  return numbers;
}

interface AboutProps {}

const About: FC<AboutProps> = () => {

  const [user,setHobby] = useContext(UserContext);
  const [value,setValue] = useState('');

  const addHobby = () => {
    setHobby(value);
    setValue('');
  }

  const numbers = useMemo(() => expensive(),[]);

  console.log('render about');
  console.log(numbers);
  return(
    <div className={styles.About}>
      <p>age: {user.age}</p><hr />
      <p>name: {user.name}</p><hr />
      <button onClick={addHobby}>add hobby</button>
      <input value={value} onChange={(e) => {
        setValue(e.target.value);
      }} type="text" /><hr />
      {user.hobbies.map((hobby) => <strong key={hobby}> {hobby} </strong>)}
    </div>
  );
}

export default About;
