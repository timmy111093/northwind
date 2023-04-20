import React, { FC, useEffect, useRef, useState } from 'react';
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
import Alert from '../../Alert/Alert';

interface AddProductProps {
  onClose: () => void;
}

type User = {
  name: string;
  age: number;
}

const AddProduct: FC<AddProductProps> = ({onClose}) => {

  const {register,handleSubmit, formState} = useForm<Product>();
  const dispacth = useAppDispatch();
  const [user,setUser] = useState<User>({
    name:'yaniv',
    age: 35
  })
  
  const [error,setError] = useState<any>(null);
  const [showError,setShowError] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const prevStateRef = useRef<User>(user);
  // with useRef - the current key does not changes in rendering the component
  let prevStateWithoutRef: User = user;
  // without useRef = the data will change in rendering the component

  const submitProductHandler = (product:Product) => {
    addingProduct(product).then((_product) => {
      // onAddProduct(_product);
      dispacth(addProduct(_product))
      onClose();

    }).catch((err) => {
      setShowError(true);
      setError(err);
    });
  }

  useEffect(()=> {
    prevStateRef.current = user;
  },[])

  // useEffect(() => {

  //   if(inputRef.current){
  //     inputRef.current.focus();
  //   }
  //   console.log('input ref component',inputRef);
  // },[])

  console.log(prevStateWithoutRef);
  console.log(prevStateRef);
  console.log('input ref component',inputRef);

  return(
    <Modal onClose={onClose}>
      {error && showError && <Alert error={error} onClose={() => setShowError(false)}>
          <button onClick={() => {
            window.location.reload();
          }}>refresh page</button>
        </Alert>}
          <div className={styles.AddProduct}>
          <span className='closing' onClick={onClose}>Close</span><br />

          <FormErrors error={formState.errors.name?.message}>
            <label>Name:</label>
            <input ref={inputRef} type="text" />
         </FormErrors>
         <button onClick={() => {
          setUser({
            name: 'johnny',
            age: 20
          })
         }}>User</button>

      <form onSubmit={handleSubmit(submitProductHandler)}>
      <h2>Add Product</h2>


         <FormErrors error={formState.errors.name?.message}>
            <label>Name:</label>
            <input  type="text" {...register('name', validation.name)} />
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
