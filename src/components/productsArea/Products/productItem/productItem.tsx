import React, { FC } from 'react';
import styles from './productItem.module.scss';
import Product from '../../../../Models/Product';

interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({product}) => (
  <li className={`Box ${styles.ProductItem}`}>
    <p>Name: {product.name}</p>
    <p>Price: {product.price}</p>
    <p>Stock: {product.stock}</p>
  </li>
);

export default ProductItem;
