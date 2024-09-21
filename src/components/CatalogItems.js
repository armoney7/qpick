import React from 'react';
import CatalogItem from './CatalogItem';
import headphones from '../data/headphones';

export default function CatalogItems({addToCart}) {
  return (
    <main>
        <span className='headphones'>Наушники</span>
        <div className='items'>
            {headphones.map(el => (
                <CatalogItem key={el.id} item={el} addToCart={addToCart} />
            ))}
        </div>
    </main>
  )
}
