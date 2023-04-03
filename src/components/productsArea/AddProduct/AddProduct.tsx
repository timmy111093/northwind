import React, { FC } from 'react';
import {useForm} from 'react-hook-form';
import { useAppDispatch } from '../../../hooks';
import Product from '../../../Models/Product';
import styles from './AddProduct.module.scss';
import validation from './validation';
import FormErrors from '../../FormErrors/FormErrors';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';
import { addProduct } from '../productsSlice';
import { addingProduct } from '../../../Utils/fetch';

interface AddProductProps {
  onClose: () => void;

}

const AddProduct: FC<AddProductProps> = ({onClose}) => {

  const {register,handleSubmit, formState} = useForm<Product>();
  const dispacth = useAppDispatch();

  const submitProductHandler = (product:Product) => {
    addingProduct(product).then((_product) => {
      // onAddProduct(_product);
      dispacth(addProduct(_product))
      onClose();
    }).catch((err) => console.log(err))
  }

  // console.log(register('name'));
  return(
    <Modal onClose={onClose}>
          <div className={styles.AddProduct}>
          <span className='closing' onClick={onClose}>Close</span><br />


      <form onSubmit={handleSubmit(submitProductHandler)}>
      <h2>Add Product</h2>
         <FormErrors error={formState.errors.name?.message}>
            <label>Name:</label>
            <input type="text" {...register('name', validation.name)} />
         </FormErrors>
         <FormErrors error={formState.errors.price?.message}>
        <label>Price:</label>
        <input type="number" {...register('price', validation.price)} />
        </FormErrors>
        <FormErrors error={formState.errors.stock?.message}>
        <label>Stock:</label>
        <input type="number" {...register('stock', validation.stock)} />
        </FormErrors>
        <FormErrors>
        <label>image:</label>
        <input type="file" accept='image/*' {...register('image')} />
        </FormErrors>
        <Button>Add</Button>
      </form>
    </div>
    </Modal>
  );
}

export default AddProduct;
