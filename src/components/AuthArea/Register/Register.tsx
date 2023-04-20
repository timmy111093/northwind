import React, { FC } from 'react';
import styles from './Register.module.scss';
import * as Auth from '../../../auth/authSlice';
import { useAppDispatch } from '../../../hooks';
import { useForm } from 'react-hook-form';
import FormErrors from '../../FormErrors/FormErrors';
import Button from '../../Button/Button';
import User from '../../../Models/User';
import { registerAsync } from '../../../fetch/auth';

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {

  const dispatch = useAppDispatch();
  const {register,handleSubmit} = useForm<User>();

  const registerHandler = async (user:User) => {
    try{
      const token = await registerAsync(user);

      dispatch(Auth.register(token));
      console.log(token);
    }catch(error){
      console.log('error:' + error);
    }
  }

  return (
    <div className={`Box ${styles.Register}`}>
            <h3>Register</h3>
        <form onSubmit={handleSubmit(registerHandler)}>
          <FormErrors>
            <label>first name:</label>
            <input type="text" {...register('firstName')}/>
          </FormErrors>
          <FormErrors>
            <label>last name:</label>
            <input type="text" {...register('lastName')}/>
          </FormErrors>
          <FormErrors>
            <label>username:</label>
            <input type="text" {...register('username')}/>
          </FormErrors>
          <FormErrors>
            <label>password:</label>
            <input type="password" {...register('password')}/>
          </FormErrors>
          <Button>Register</Button>
        </form>
    </div>
  );
}

export default Register;
