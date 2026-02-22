import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

 const addToCart = (product) => {
  setCartItems(prev => {
    const exists = prev.find(item => item.id === product.id);
    let updated;

    if (exists) {
      updated = prev.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      updated = [...prev, { ...product, qty: 1 }];
    }

    console.log("🛒 Cart Items:", updated); // 🔥 ADD THIS
    return updated;
  });
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);