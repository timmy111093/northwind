import React, { FC } from 'react';
import styles from './productItem.module.scss';
import Product from '../../../../Models/Product';
import { BASE_API_URL } from '../../../../config';
import { NavLink } from 'react-router-dom';

interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({product}) => {

  const {price,name,stock,imageName,id} = product;
  const imgSrc = `${BASE_API_URL}/products/images/${imageName}`;

  return(
    <li className={`Box ${styles.ProductItem}`}>
      <div className={styles.ProductItem__content}>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Stock: {product.stock}</p>
      </div>
      <div className={styles.ProductItem__link}>
        <NavLink to={`/products/${id}`}>
          <img src={imgSrc} alt={name} />
        </NavLink>
      </div>
    </li>
  );
}

export default ProductItem;
