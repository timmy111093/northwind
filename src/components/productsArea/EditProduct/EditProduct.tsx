import React, { FC,useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { useAppDispatch } from '../../../hooks';
import { updateProduct } from '../productsSlice';
import Product from '../../../Models/Product';
import styles from './EditProduct.module.scss';
import validation from './validation';
import FormErrors from '../../FormErrors/FormErrors';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';
import { addingProduct, updateProductAsync } from '../../../Utils/fetch';


interface EditProductProps {
  onClose: () => void;
  product: Product;
}

const EditProduct: FC<EditProductProps> = ({onClose,product}) => {

  const {register,handleSubmit, formState, setValue} = useForm<Product>();
  const dispacth = useAppDispatch();
  const submitProductHandler = (product:Product) => {

    updateProductAsync(product).then((response) => {
      // onEditProduct(response);
      dispacth(updateProduct(response));
      onClose();
    }).catch((err) => console.log(err))
  }

  useEffect(() => {
    setValue('id',product.id);
    setValue('name',product.name);
    setValue('price',product.price);
    setValue('stock',product.stock);
  },[])

  return(
    <Modal onClose={onClose}>
          <div className={`Box ${styles.EditProduct}`}>
          <span className='closing' onClick={onClose}>Close</span><br />

      <form onSubmit={handleSubmit(submitProductHandler)}>
      <h2>Edit Product</h2>
      <input type="hidden" value={product.id} />
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
        <Button>Update</Button>
      </form>
    </div>
    </Modal>
  );
}

export default EditProduct;
