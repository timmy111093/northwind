import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.scss';
import Product from '../../../Models/Product';
import { getProduct } from '../../../Utils/fetch';
import { BASE_API_URL } from '../../../config';
import Loader from '../../Loader/Loader';

interface ProductDetailsProps {}

const ProductDetails: FC<ProductDetailsProps> = () => {

  const params = useParams();
  const [product,setProduct] = useState<Product>();
  const [loading,setLoading] = useState(true);


  useEffect(() => {

    if(params.prodId){

      getProduct(+params.prodId).then((product) => {
         setProduct(product);
      }).catch((err) => {
        console.log(err.message);
      }).finally(() => {
        setLoading(false)
      });
    }  

  },[])

  const renderProduct = () => {
    if(product) {
      const imgSrc = `${BASE_API_URL}/products/images/${product.imageName}`;
      return(
        <div className={styles.ProductDetails__product}>
          <div className={styles.ProductDetails__imgContainer}>
            <img src={imgSrc} />
          </div>
          <div className={`Box ${styles.ProductDetails__content}`}>
            <h4>Name: {product.name}</h4>
            <h4>Price: {product.price}</h4>
            <h4>Stock: {product.stock}</h4>
          </div>
        </div>
      )
    }
  }


  if(loading) return <div className={styles.ProductDetails__loader}><Loader/></div>
  return(
    <div className={styles.ProductDetails}>
      <header className={styles.ProductDetails__header}>
        <h2>Product Details</h2>
      </header>
      <div className={styles.ProductDetails__body}>
        {renderProduct()}
      </div>

    </div>
  );
}

export default ProductDetails;
