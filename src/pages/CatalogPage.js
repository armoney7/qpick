import React from 'react';
import Footer from '../components/Footer';
import CatalogItems from '../components/CatalogItems';

export default function CatalogPage({ addToCart }) {
  return (
    <div className='wrapper'>
        <CatalogItems addToCart={addToCart} />
        <Footer />
    </div>
  )
}
