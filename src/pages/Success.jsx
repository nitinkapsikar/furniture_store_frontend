import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-semibold mb-4">
        Order Placed Successfully 🎉
      </h1>
      <p className="text-gray-500 mb-8">
        Thank you for your purchase!
      </p>

      <button
        onClick={() => navigate("/orders")}
        className="bg-orange-600 text-white px-6 py-2 rounded"
      >
        View Your Orders
      </button>
    </div>
  );
}