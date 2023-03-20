import React, { FC,useEffect,useState } from 'react';
import Product from '../../Models/Product';
import { getProducts } from '../../Utils/fetch';
import Loader from '../Loader/Loader';
import Products from './Products/Products';
import styles from './productsArea.module.scss';

interface ProductsAreaProps {}

const ProductsArea: FC<ProductsAreaProps> = () => {

  const [products,setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setIsLoading(true);
    getProducts().then((products) => {
      setProducts(products);
    }).catch((err) => {
      console.log(err.message);
    }).finally(() => {
      setIsLoading(false);
    })
  },[])

  // if(products.length === 0) return <p>no products</p>;
  //  return <Loader />;
  if(isLoading){
    return(
      <div className={styles.ProductsArea__loaderContainer}>
      <Loader />
    </div>
    );
  }

  return(
    <div className={styles.ProductsArea}>
      <Products products={products}/>
    </div>
  );
}

export default ProductsArea;
