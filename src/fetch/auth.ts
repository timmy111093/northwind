import axios from 'axios';
import { NORTHWIND_API_URL } from '../config';
import Credentials from '../models/Credentials';
import User from '../models/User';

export const registerAsync = async (user:User):Promise<string> => {
    
      const response = await axios.post(`${NORTHWIND_API_URL}/auth/register`,user);

      const token = response.data;

      return token;
}

export const loginAsync = async (credentials:Credentials):Promise<string> => {
    
      const response = await axios.post(`${NORTHWIND_API_URL}/auth/login`,credentials);

      const token = response.data;

      return token;
}