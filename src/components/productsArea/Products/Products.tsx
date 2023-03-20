import React, { FC } from 'react';
import Product from '../../../Models/Product';
import ProductItem from './productItem/productItem';
import styles from './Products.module.scss';
import { NavLink } from 'react-router-dom';

interface ProductsProps {
  products: Product[];
}

const Products: FC<ProductsProps> = ({products}) => {

  const renderProducts = () => {
    return products.map((product) =>{
       const {price,id} = product;
       return <ProductItem key={id} product={product}/>
    })
  }

  return(
    <div className={styles.Products}>
    <NavLink  to='/products/new'>Add Product</NavLink>
    <ul className={styles.Products__list}>
      {renderProducts()}
    </ul>
    </div>
  );
}

export default Products;
