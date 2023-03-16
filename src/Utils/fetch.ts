import axios from 'axios';
import Product from '../Models/Product';
import { BASE_API_URL } from '../config';
import { resolve } from 'path';

export const getProducts = async (): Promise<Product[]> => {
   //ajax
   const response = await axios.get<Product[]>(`${BASE_API_URL}/products`);

   const products = response.data;

   return new Promise((resolve,reject)=> {
   setTimeout(() => {
      
         resolve(products);
      }, 3000);

      });
   

   //extract products





}