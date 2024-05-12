import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    setCart((prevCart) => {
      console.log("current cart state", prevCart);

      const ItemIndex = prevCart.findIndex((item) => item.id === newItem.id);

      if (ItemIndex > -1) {
        const newCart = prevCart.map((cartItem, index) => {
          if (index === ItemIndex) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
        return newCart;
      } else {
        return [...prevCart, { ...newItem, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
