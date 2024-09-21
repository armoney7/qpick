import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';

function App() {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item) => {
		setCartItems((prevItems) => {
		  const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
	  
		  if (existingItemIndex >= 0) {
			const updatedItems = [...prevItems];
			updatedItems[existingItemIndex].quantity += 1;
			return updatedItems;
		  } else {
			return [...prevItems, { ...item, quantity: 1 }];
		  }
		});
	};

	const updateQuantity = (id, action) => {
		setCartItems((prevItems) => {
		  return prevItems.map(item => {
			if (item.id === id) {
			  const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
			  return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
			}
			return item;
		  });
		});
	  };
	  
	  
	return (
		<Router>
			<Header cartCount={cartItems.length} />
			<Routes>
				<Route path='/' element={<CatalogPage addToCart={addToCart} cartCount={cartItems.length} />} />
				<Route path='/cart' element={<CartPage cartItems={cartItems} updateQuantity={updateQuantity} cartCount={cartItems.length} />} />
			</Routes>
		</Router>
	);
}

export default App;
