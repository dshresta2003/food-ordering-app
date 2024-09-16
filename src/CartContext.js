// src/CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(i => i.name === item.name);
      if (existingItemIndex > -1) {
        // Update quantity if item already in cart
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      }
      // Add new item to cart
      return [...prevItems, item];
    });
  };

  // Remove item from cart
  const removeFromCart = (itemName) => {
    setCartItems((prevItems) => prevItems.filter(item => item.name !== itemName));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
