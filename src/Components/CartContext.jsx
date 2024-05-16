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

  const deleteItemFromCart = (id) => {
    console.log("Deleting item with id", id);

    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== id);
      return newCart;
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart?.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : { ...item, quantity: (item.quantity = 1) }
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteItemFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
