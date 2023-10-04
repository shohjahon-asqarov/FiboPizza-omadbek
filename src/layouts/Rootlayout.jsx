import React from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

const Rootlayout = ({cart, setCart}) => {
  return (
    <div>
      <Header cart={cart} setCart={setCart}/>
      <Footer />
    </div>
  );
}

export default Rootlayout;
