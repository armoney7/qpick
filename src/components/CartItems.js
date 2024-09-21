import React from 'react';
import { RiDeleteBin2Line as DeleteItem } from "react-icons/ri";
import { AiFillMinusCircle as MinusIcon, AiFillPlusCircle as PlusIcon } from "react-icons/ai";


export default function CartItems({ cartItems, updateQuantity }) {
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    return (
        <main className="cart-items">
            <span className='cart-span'>Корзина</span>
            {cartItems.length === 0 ? (<p className='cart-empty'>Корзина пуста</p>) : 
            (
                <div className='cart-content'>
                    <ul className='cart-list'>
                        {cartItems.map((item, index) => (
                            <li className='cart-item' key={index}>
                            <img src={item.img} alt={item.title} className='cart-item-image' />
                            <div className='cart-item-details'>
                                <p className='cart-item-title'>{item.title}</p>
                                <p className='cart-item-price'>{item.price} ₽</p>
                            </div>
                            <DeleteItem className="delete-icon" fill='#DF6464' size={20} />
                            <div className='cart-item-quantity'>
                                <MinusIcon onClick={() => updateQuantity(item.id, 'decrease')} size={30} className='quantity-button' />
                                <span className='quantity-number'>{item.quantity}</span>
                                <PlusIcon onClick={() => updateQuantity(item.id, 'increase')} size={30} className='quantity-button' />
                            </div>
                            <p className='cart-item-total-price'>
                                {(item.price * item.quantity)} ₽
                            </p>
                            </li>
                        ))}
                    </ul>
                
                    <div className="total-container">
                        <p className='total-price'><span>ИТОГО</span> <span>{totalPrice} ₽</span></p>
                        <button className='checkout-button'>Перейти к оформлению</button>
                    </div>
                </div>
            )}
        </main>
  );
}
