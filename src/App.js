import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [isCardShown, setIsCartShown] = useState(false);
  const showCartHandler = () => {
    setIsCartShown(true);
  }
  const hideCartHandler = () => {
    setIsCartShown(false);
  }
  return (
    <CartProvider>
      {isCardShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header showCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
