import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import styles from './AuthMenu.module.scss';
import {NavLink} from 'react-router-dom';
import { logout } from '../../../auth/authSlice';

interface AuthMenuProps {}

const AuthMenu: FC<AuthMenuProps> = () => {

  const dispatch = useAppDispatch();
  
  const {user} = useAppSelector((state) => state.authState);

  const logOutHandler = () => {
    dispatch(logout());
  }

  const rendercontent = () => {
    if(user){
      return(
        <>
        <span>Hello {user.firstName} {user.lastName} | 
        <NavLink onClick={logOutHandler} to="#">Log-out</NavLink>
        </span> 
        </>
      )
    }
    return (
      <>
      <span>Hello Guest!</span><br />
      <NavLink to="/login">Log-in</NavLink>
      <span> | </span>
      <NavLink to="/register">Register</NavLink>
      </>
    )
  }

  return(
    <div className={styles.AuthMenu}>
      {rendercontent()}
    </div>
  );
}

export default AuthMenu;
