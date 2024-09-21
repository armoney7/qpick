import React from 'react';
import { MdOutlineStarPurple500 as Star } from "react-icons/md";

export default function CatalogItem({ item, addToCart }) {
  return (
    <div className="catalog-item">
        <img src={item.img} alt={item.title} />
        <div className='common-div'>
            <div className='first-div'>
                <span className='title'>{item.title}</span>
                <p className='price'>{item.price} ₽</p>
            </div>
            <div className='second-div'>
                <p className='rate'><Star size={23} fill='#FFCE7F' /> {item.rate}</p>
                <button onClick={() => addToCart(item)} className='button' type='button'>Купить</button>
            </div>
        </div>
    </div>
  );
}
