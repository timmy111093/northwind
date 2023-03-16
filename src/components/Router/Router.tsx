import { Navigate, Route, Routes } from 'react-router-dom';
import React, { FC } from 'react';
import styles from './Router.module.scss';
import Home from '../HomeArea/Home/Home';
import About from '../AboutArea/About/About';
import Products from '../productsArea/Products/Products';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProductsArea from '../productsArea/productsArea';

interface RouterProps
 {}

const Router: FC<RouterProps> = () => (

  <Routes>
    <Route path='/home' element={<Home />}/>

    <Route path='/about' element={<About />}/>
    <Route path='/products' element={<ProductsArea />}/>

    {/* default route */}
    <Route path='/' element={<Navigate to="/home"/>}/>

    {/* error route */}
    <Route path='*' element={<PageNotFound />}/>
  </Routes>
);

export default Router;
