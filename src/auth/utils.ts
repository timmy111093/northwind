import jwtDecode from 'jwt-decode';
import { setAuthHeader } from '../axios/utils';
import { AUTH_LOGIN_SESSION_STORAGE_KEY } from '../config';
import User from '../Models/User';
import { AuthState } from './authSlice';

export const setInitialAuthState = ():AuthState => {

      //take the token from session storage (if exists)
      const token = sessionStorage.getItem(AUTH_LOGIN_SESSION_STORAGE_KEY);
      let user = null;

      if(token){
         // setAuthHeaders
         const container: {user:User} = jwtDecode(token);
         user = container.user;
         setAuthHeader(token);
      } 

      return {
            user,
            token
      }
}

export const handleToken = (state: AuthState,token: string) => {
      state.token = token;
      const container:{user:User} = jwtDecode(token);
      state.user = container.user;
      setAuthHeader(token);

      // setAuthHeaders
      sessionStorage.setItem(AUTH_LOGIN_SESSION_STORAGE_KEY, token);
}