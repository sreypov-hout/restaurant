"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Initialize cart from localStorage and set up cross-tab sync
  useEffect(() => {
    // Load initial cart state
    const savedCart = typeof window !== 'undefined' 
      ? JSON.parse(localStorage.getItem('cartItems')) || []
      : [];
    setCartItems(savedCart);
    setCartCount(savedCart.reduce((sum, item) => sum + item.quantity, 0));

    // Handler for cross-tab updates
    const handleStorageChange = (event) => {
      if (event.key === 'cartItems') {
        const newCart = JSON.parse(event.newValue) || [];
        setCartItems(newCart);
        setCartCount(newCart.reduce((sum, item) => sum + item.quantity, 0));
      }
    };

    // Listen for storage events (cross-tab)
    window.addEventListener('storage', handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Update localStorage and broadcast to other tabs
  const syncCart = (newCart) => {
    // Update local state
    setCartItems(newCart);
    const newCount = newCart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(newCount);
    
    // Update localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(newCart));
      
      // Broadcast to other tabs (not needed for same-origin tabs)
      // The storage event will handle this automatically
    }
  };

  // In your addToCart function in cartContext.jsx
const addToCart = (item) => {
  const newCart = cartItems.find(cartItem => cartItem.id === item.id)
    ? cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { 
              ...cartItem, 
              quantity: cartItem.quantity + 1,
              updatedAt: Date.now() // Update timestamp when modified
            }
          : cartItem
      )
    : [...cartItems, { 
        ...item, 
        quantity: 1, 
        status: 'preparing',
        createdAt: Date.now(), // Add timestamp when created
        updatedAt: Date.now()
      }];
  
  syncCart(newCart);
};

  // const addToCart = (item) => {
  //   const newCart = cartItems.find(cartItem => cartItem.id === item.id)
  //     ? cartItems.map(cartItem =>
  //         cartItem.id === item.id
  //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //           : cartItem
  //       )
  //     : [...cartItems, { ...item, quantity: 1, status: 'preparing' }];
  //   syncCart(newCart);
  // };

  const updateCartItemQuantity = (id, quantity) => {
    const newCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ).filter(item => item.quantity > 0); // Remove if quantity is 0
    syncCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cartItems.filter(item => item.id !== id);
    syncCart(newCart);
  };

  const submitOrder = () => {
    setOrders(prevOrders => [...prevOrders, ...cartItems]);
    syncCart([]); // Clear cart
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
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