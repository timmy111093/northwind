import React, { FC,useEffect,useState } from 'react';
import { useAppDispatch,useAppSelector } from '../../hooks';
import Product from '../../Models/Product';
import { getProducts } from '../../Utils/fetch';
import Loader from '../Loader/Loader';
import Products from './Products/Products';
import {setProducts} from './productsSlice';
import styles from './productsArea.module.scss';


interface ProductsAreaProps {}

const ProductsArea: FC<ProductsAreaProps> = () => {

  // const [products,setProducts] = useState<Product[]>([]); ---- without Redux
  const {products} = useAppSelector((state) => state.productsState);
  const dispacth = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setIsLoading(true);
    getProducts().then((products) => {
      // setProducts(products);

      dispacth(setProducts(products));

    }).catch((err) => {
      console.log(err.message);
    }).finally(() => {
      setIsLoading(false);
    })
  },[])
 
  // const addProductHandler = (product:Product) => {
    
  //   dispacth(add())

    // setProducts((prevProducts) => {
    //   const productsToUpdate = [...prevProducts];
    //   productsToUpdate.push(product);
    //   return productsToUpdate;
    // })
  // }

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
      <Products  products={products}/>
    </div>
  );
}

export default ProductsArea;
