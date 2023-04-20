import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import { AUTH_LOGIN_SESSION_STORAGE_KEY } from '../config';
import User from '../Models/User';
import {handleToken, setInitialAuthState} from './utils';

export interface AuthState{
      user: User | null;
      token: string | null;
}

export const authSlice = createSlice({
      name: 'auth',
      initialState: setInitialAuthState(),
      reducers:{
            register: (state,{ payload: token }:PayloadAction<string>) => {
                  //save token
                  handleToken(state,token);
                  
            },
            login: (state,{ payload: token }:PayloadAction<string>) => {
                  //save token
                  handleToken(state,token);
            },
            logout: (state) => {
                  //remove token
                  state.token = null;
                  state.user = null;
                  sessionStorage.removeItem(AUTH_LOGIN_SESSION_STORAGE_KEY);
            }
      }
});

//export the action creators
export const {register,login,logout} = authSlice.actions;

export default authSlice.reducer;
