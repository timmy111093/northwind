import React, { FC, ReactNode } from 'react';
import Modal from '../Modal/Modal';
import styles from './Alert.module.scss';

type Error = {
  message: string;
}

interface AlertProps {
  error: string | Error;
  children?: ReactNode;
  onClose: () => void;
}

const Alert: FC<AlertProps> = ({onClose,error}) => {

  let _error = typeof error === "string" ? error : error.message;

  return (

    <Modal onClose={onClose}>
      <div className={styles.Alert}>
        <p>Something went wrong...</p>
        <br />
        <p>{_error}</p>
      </div>
    </Modal>
  );
}

export default Alert;
