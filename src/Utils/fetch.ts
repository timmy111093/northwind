import axios from '../axios';
import Product from '../Models/Product';

export const getProducts = async (): Promise<Product[]> => {
   //ajax
   const response = await axios.get<Product[]>(`/products`);
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
   const response = await axios.get(`/products/${id}`);
   // use the key 'data' inside response{promise}
   const product = response.data;

   return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(product);
      },1500)
   })

}

// REST API methods 
// get - get data
// post - add data
// put - update full data in the server
// patch - update partial data in server - update 1 / few props
// delete - dalete data from server

export const addingProduct = async (product:Product):Promise<Product> => {

   // AJAX request - send a new product to the server / recieving back the added product

   const formData = new FormData(); // containing strings / files

   formData.append('name', product.name);
   formData.append('price', product.price.toString());
   formData.append('stock', product.stock.toString());
   formData.append('image', product.image[0]); // image = FileList image[0] = File / Blob
   
   const response = await axios.post(`/products/`,formData);
   const addedProduct = response.data;

   return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(addedProduct);
      },1500)
   });
}

export const updateProductAsync = async (product:Product):Promise<Product> => {

   // AJAX request - send a new product to the server / recieving back the added product

   const formData = new FormData(); // containing strings / files

   formData.append('name', product.name);
   formData.append('price', product.price.toString());
   formData.append('stock', product.stock.toString());
   formData.append('image', product.image[0]); // image = FileList image[0] = File / Blob
   
   const response = await axios.put(`/products/${product.id}`,formData);
   const updatedProduct = response.data;

   return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(updatedProduct);
      },1500)
   });
}

export const deleteProductAsync = async (id:number):Promise<boolean> => {

   await axios.delete(`/products/${id}`);

   return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(true);
        reject(false);
      },1500)
   });
   
}