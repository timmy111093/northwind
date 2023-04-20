import React, { FC, useContext } from 'react';
import { UserContext } from '../../../context/Provider';
import styles from './footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {

  const [user] = useContext(UserContext);

  return(
    <footer className={styles.Footer}>
      <p>All Rights Reserved &copy;</p>
      {user.hobbies.map(hobby => <strong key={hobby}> | {hobby} | </strong>)}
    </footer>
  );
}

export default Footer;
