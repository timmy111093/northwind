import React, { FC, useState, useEffect } from 'react';
import { useParams,useNavigate,NavLink } from 'react-router-dom';
import styles from './ProductDetails.module.scss';
import Product from '../../../Models/Product';
import { deleteProduct, getProduct } from '../../../Utils/fetch';
import { BASE_API_URL } from '../../../config';
import Loader from '../../Loader/Loader';
import EditProduct from '../EditProduct/EditProduct';


interface ProductDetailsProps {}

const ProductDetails: FC<ProductDetailsProps> = () => {

  const params = useParams();
  const navigate = useNavigate();
  const [showEditedProduct,setShowEditedProduct] = useState(false);
  const [product,setProduct] = useState<Product>();
  const [loading,setLoading] = useState(true);

  const modalToggleHandler = () => {
    setShowEditedProduct((prevState) => !prevState);
 }

 const editProductHandler = (product:Product) => {
    setProduct((prevProduct) => {
      const updatedProduct =  {...prevProduct, ...product};
      return updatedProduct;
    })
 }

  const deleteProductHandler = async () => {
    if(params.prodId){
      setLoading(true);
      try{
        const success = await deleteProduct(+params.prodId);
        if(success) {
          alert('product was deleted successfully!');
          navigate('/products');
        }
      }catch(err){
        console.log(err);
        setLoading(false);
      }
    }
  }

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
            <NavLink to="/products">Back</NavLink>
            <span> | </span>
            <NavLink onClick={modalToggleHandler} to="#">Edit</NavLink>
            <span> | </span>
            <NavLink onClick={deleteProductHandler} to="#">Delete</NavLink>
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

      {(showEditedProduct && product) && <EditProduct onEditProduct={editProductHandler} onClose={modalToggleHandler} product={product}/>}
    </div>
  );
}

export default ProductDetails;
