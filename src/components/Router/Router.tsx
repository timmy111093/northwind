import { Navigate, Route, Routes } from 'react-router-dom';
import React, { FC } from 'react';
import styles from './Router.module.scss';
import Home from '../HomeArea/Home/Home';
import About from '../AboutArea/About/About';
import Products from '../productsArea/Products/Products';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProductsArea from '../productsArea/productsArea';
import ProductDetails from '../productsArea/ProductDetails/ProductDetails';
import AddProduct from '../productsArea/AddProduct/AddProduct';

interface RouterProps
 {}

const Router: FC<RouterProps> = () => (

  <Routes>
    <Route path='/home' element={<Home />}/>

    <Route path='/about' element={<About />}/>

    {/* products routes */}
    <Route path='/products' element={<ProductsArea />}/>

    {/* add products route */}
    <Route path='/products/new' element={<AddProduct />}/>

    {/* product page route */}
    <Route path='/products/:prodId' element={<ProductDetails />}/>

    {/* default route */}
    <Route path='/' element={<Navigate to="/home"/>}/>

    {/* error route */}
    <Route path='*' element={<PageNotFound />}/>


  </Routes>
);

export default Router;
