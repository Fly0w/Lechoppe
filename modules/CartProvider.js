'use client'

import { useState } from 'react';
import CartContext from './CartContext';

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [toggleCart, setToggleCart] = useState(false)

  const addToCart = (item) => {
    // Declare item cart object with only useful data
    const itemCart = {
      id: item._id,
      itemName: item.name,
      image: item.urls[0].src,
      quantity: 1
    }

    // Check if the item is already in the cart
    const exist = cartItems.find((x) => x.id === itemCart.id)

    // If item already in the cart...
    if (exist){
      // ... Then increase the quantity by 1
      setCartItems(
        cartItems.map((x) => x.id === itemCart.id ? {...exist, quantity: exist.quantity +1 } : x
        )
      )
    // If item not in the cart...
    } else {
      // ... Then add the itemCart in the cart 
      setCartItems([...cartItems, itemCart]);
    }
  };

  const increaseQty = (item) => {
    const exist = cartItems.find((x) => x.id === item.id)
    setCartItems(
      cartItems.map((x) => x.id === item.id ? {...exist, quantity: exist.quantity +1 } : x
      )
    )
  }

  // Function that increases the quantity of one item in the basket
  const decreaseQty = (item) => {
    const exist = cartItems.find((x) => x.id === item.id)
    console.log(exist)

    if(exist.quantity <= 0){
      setCartItems(
        cartItems.map((x) => x.id === item.id ? {...exist, quantity: 0 } : x
        )
      )
    }else{
      setCartItems(
        cartItems.map((x) => x.id === item.id ? {...exist, quantity: exist.quantity -1 } : x
      )
    )
    }
  }


  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, toggleCart, addToCart, removeFromCart, clearCart, increaseQty, decreaseQty, setToggleCart}}>
      {children}
    </CartContext.Provider>
  );
};