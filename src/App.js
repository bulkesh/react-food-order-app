import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [isCardShown, setIsCartShown] = useState(false);
  const showCartHandler = () => {
    setIsCartShown(true);
  }
  const hideCartHandler = () => {
    setIsCartShown(false);
  }
  return (
    <React.Fragment>
      {isCardShown && <Cart onCloseCart={hideCartHandler}/>}

      <Header showCart={showCartHandler}/>
      <main>
        <Meals />
      </main>

    </React.Fragment>
  );
}

export default App;
