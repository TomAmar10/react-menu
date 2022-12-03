import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
  cartItems: [],
  onLogOut: () => {},
  onLogIn: () => {},
  onAddItem: () => {},
  onRemoveItem: () => {},
  onEditItem: () => {},
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("items"));
    if (storageData) setCartItems(storageData);
  }, []);

  const addItem = (item) => {
    const prevItem = cartItems.find((i) => i.id === item.id);
    if (prevItem) {
      prevItem.amount += item.amount;
      editItem(prevItem);
      return;
    }
    setCartItems((prev) => {
      localStorage.setItem("items", JSON.stringify([...prev, item]));
      return [...prev, item];
    });
  };
  const editItem = async (newItem) => {
    const allItems = [...cartItems].map((i) => {
      if (i.id === newItem.id) return newItem;
      return i;
    });
    setCartItems(allItems);
    localStorage.setItem("items", JSON.stringify(allItems));
  };

  const removeItem = (item) => {
    const newItems = [...cartItems].filter((i) => i.id !== item.id);
    setCartItems(newItems);
    if (!newItems.length) {
      localStorage.removeItem("items");
      return;
    }
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        onAddItem: addItem,
        onRemoveItem: removeItem,
        onEditItem: editItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
