import React from 'react';
import Footer from '../components/Footer';
import CartItems from '../components/CartItems';

export default function CartPage({ cartItems, updateQuantity }) {
  return (
    <div className='wrapper'>
        <CartItems cartItems={cartItems} updateQuantity={updateQuantity} />
        <Footer />
    </div>
  )
}
