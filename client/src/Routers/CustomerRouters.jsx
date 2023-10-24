import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage  from '../customer/pages/HomePage/HomePage';
import Navigation from '../customer/components/Navigation/Navigation';
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Cart from '../customer/components/Cart/Cart';
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order';
import OrderDetails from '../customer/components/Order/OrderDetails';
import Footer from '../customer/components/Footer/Footer';

const CustomerRouters = () => {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/login' element={<HomePage/>} />
        <Route path='/register' element={<HomePage/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>} />
        <Route path='/product/:productId' element={<ProductDetails/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/account/order' element={<Order/>} />
        <Route path='/account/order/:orderId' element={<OrderDetails/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default CustomerRouters
