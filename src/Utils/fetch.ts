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
      }, 2000);
   });
   

   //extract products
}

export const getProduct = async (id:number):Promise<Product> => {
   //ajax
   const response = await axios.get(`${BASE_API_URL}/products/${id}`);
   // use the key 'data' inside response{promise}
   const product = response.data;

   return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(product);
      },1500)
   })

}