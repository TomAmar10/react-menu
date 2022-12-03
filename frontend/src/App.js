import "./App.css";
import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const hideCart = () => {
    setIsVisible(false);
  };
  const showCart = () => {
    setIsVisible(true);
  };
  return (
    <CartContextProvider>
      <Header onShowCart={showCart} />
      <Main />
      {isVisible && <Cart onHideCart={hideCart} />}
    </CartContextProvider>
  );
}

export default App;
