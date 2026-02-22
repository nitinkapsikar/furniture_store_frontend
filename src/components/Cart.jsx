import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";



export default function Cart() {
  const [showBill, setShowBill] = useState(false);
const [currentOrder, setCurrentOrder] = useState(null);
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();
  const { placeOrder } = useCart();





  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">
          Your cart is empty 🛒
        </h2>
        <button
          onClick={() => navigate("/products")}
          className="bg-orange-600 text-white px-6 py-2 rounded"
        >
          Shop Products
        </button>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-10">
        Shopping Cart
      </h1>

      <div className="space-y-6">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="
              flex items-center justify-between
              bg-black
              border rounded-xl
              p-4
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
            "
          >
            {/* LEFT – IMAGE + INFO */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg border"
              />

              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">
                  ₹ {item.price}
                </p>
              </div>
            </div>

            {/* QTY CONTROLS */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                –
              </button>

              <span className="font-medium">{item.qty}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {/* TOTAL */}
            <div className="font-semibold">
              ₹ {item.price * item.qty}
            </div>

            {/* REMOVE */}
         <button
  onClick={() => removeFromCart(item.id)}
  className="
    text-gray-400
    hover:text-red-600
    transition
  "
  title="Remove item"
>
  <FiTrash2 className="text-lg" />
</button>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="mt-12 flex justify-between items-center border-t pt-6">
        <h2 className="text-xl font-semibold">
          Total: ₹ {total}
        </h2>

   <button
  onClick={() => {
    const totalAmount = total;
    setCurrentOrder({
      total: totalAmount,
      payable: 0,
    });
    setShowBill(true);
  }}
  className="
    bg-orange-600 text-white
    px-8 py-3 rounded
    hover:bg-orange-700
    transition
  "
>
  Buy Now
</button>
      </div>

{showBill && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">

      <h2 className="text-2xl font-semibold text-black mb-6 text-center">
        Bill Summary
      </h2>

      {/* ITEMS LIST */}
      <div className="space-y-3 mb-6 max-h-60 overflow-y-auto text-black ">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between text-sm"
          >
            <div>
              <p className="font-medium">
                {item.name} × {item.qty}
              </p>
              <p className="text-gray-500">
                ₹ {item.price} each
              </p>
            </div>

            <div className="font-medium">
              ₹ {item.price * item.qty}
            </div>
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="border-t my-4"></div>

      {/* TOTAL */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between font-medium text-black">
          <span>Total Amount</span>
          <span>₹ {total}</span>
        </div>

        <div className="flex justify-between font-semibold text-green-600">
          <span>Payable Amount</span>
          <span>₹ 0</span>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Payment will be collected later (Demo / Cash on Delivery).
      </p>

      {/* ACTIONS */}
      <div className="flex gap-4">
        <button
          onClick={() => setShowBill(false)}
          className="flex-1 border rounded py-2"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            const order = placeOrder();
            setShowBill(false);
            navigate("/success", { state: order });
          }}
          className="flex-1 bg-orange-600 text-white rounded py-2 hover:bg-orange-700"
        >
          Pay Now
        </button>
      </div>
    </div>
  </div>
)}

    </section>
  );
}