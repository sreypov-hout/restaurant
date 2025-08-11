"use client";
import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  // const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1, status: 'preparing' }];
    });
    setCartCount(prev => prev + 1);
  };

  const updateCartItemQuantity = (id, quantity) => {
    setCartItems(prevCart => {
      const updatedCart = prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      setCartCount(updatedCart.reduce((sum, item) => sum + item.quantity, 0));
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevCart => {
      const updatedCart = prevCart.filter(item => item.id !== id);
      setCartCount(updatedCart.reduce((sum, item) => sum + item.quantity, 0));
      return updatedCart;
    });
  };

  const submitOrder = () => {
    setOrders(prevOrders => [...prevOrders, ...cartItems]);
    setCartItems([]);
    setCartCount(0);
  };

  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cartItems');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartCount,
        setCartCount,
        searchQuery,
        setSearchQuery,
        cartItems,
        orders,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
        submitOrder,
        setOrders
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}