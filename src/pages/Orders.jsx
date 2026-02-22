import { useCart } from "../context/CartContext";

const CANCEL_DAYS = 5;
const DAY_MS = 1000 * 60 * 60 * 24;

export default function Orders() {
  const { orders, setOrders } = useCart();
  const now = Date.now();

  if (!orders || orders.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        No orders placed yet.
      </div>
    );
  }

  const cancelOrder = (id) => {
    const updated = orders.filter((o) => o.id !== id);
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-8">Your Orders</h1>

      <div className="space-y-6">
        {orders
          .slice()
          .reverse() // latest first
          .map((order) => {
            const daysPassed =
              (now - order.createdAt) / DAY_MS;

            const isCancelable = daysPassed <= CANCEL_DAYS;

            return (
              <div
                key={order.id}
                className="border rounded-lg p-5 bg-white shadow"
              >
                {/* HEADER */}
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700">
                    Order ID: #{order.id}
                  </p>
                  <p className="text-sm text-gray-500">
                    Order Date:{" "}
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>

                {/* STATUS – CENTER */}
                <div className="flex justify-center mb-4">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium ${
                      isCancelable
                        ? "bg-green-100 text-green-700"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    {isCancelable ? "Delivering Soon" : "Delivered"}
                  </span>
                </div>

                {/* ITEMS */}
                <div className="space-y-1 mb-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-sm text-black"
                    >
                      <span>
                        {item.name} × {item.qty}
                      </span>
                      <span>
                        ₹ {item.price * item.qty}
                      </span>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black">
                    Total: ₹ {order.total}
                  </span>

                  {isCancelable && (
                    <button
                      onClick={() => cancelOrder(order.id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}