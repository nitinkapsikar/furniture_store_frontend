import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
const [orders, setOrders] = useState(() => {
  const savedOrders = localStorage.getItem("orders");
  return savedOrders ? JSON.parse(savedOrders) : [];
}); // ✅ NEW

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  // ✅ PLACE ORDER
const placeOrder = () => {
  if (cartItems.length === 0) return null;

  const now = Date.now(); // ✅ THIS WAS MISSING

  const newOrder = {
    id: now,
    items: cartItems,
    total: cartItems.reduce(
      (sum, i) => sum + i.price * i.qty,
      0
    ),
    createdAt: now,        // ✅ now is defined
    status: "Placed",
  };

  let updatedOrders = [...orders, newOrder];

  // keep only last 5 orders
  if (updatedOrders.length > 5) {
    updatedOrders = updatedOrders.slice(-5);
  }

  setOrders(updatedOrders);
  localStorage.setItem("orders", JSON.stringify(updatedOrders));

  setCartItems([]);
  localStorage.removeItem("cartItems");

  return newOrder; // important for success page
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        orders,
        setOrders,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);