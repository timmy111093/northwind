import React, { FC , useState } from 'react';
import Product from '../../../Models/Product';
import ProductItem from './productItem/productItem';
import styles from './Products.module.scss';
import { NavLink } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import AddProduct from '../AddProduct/AddProduct';

interface ProductsProps {
  products: Product[];
}

const Products: FC<ProductsProps> = ({products}) => {

  const [showAddProduct,setShowAddProduct] = useState(false);

  const modalToggleHandler = () => {
     setShowAddProduct((prevState) => !prevState);
  }

  const renderProducts = () => {
    return products.map((product) =>{
       const {price,id} = product;
       return <ProductItem key={id} product={product}/>
    })
  }

  return(
    <div className={styles.Products}>
    <NavLink onClick={modalToggleHandler} to='#'>Add Product</NavLink>
    <ul className={styles.Products__list}>
      {renderProducts()}
    </ul>
    {showAddProduct && <AddProduct onClose={modalToggleHandler}/>}
    </div>
  );
}

export default Products;
