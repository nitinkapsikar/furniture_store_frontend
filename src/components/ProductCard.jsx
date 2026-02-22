import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-[#3f4650] rounded-2xl overflow-hidden shadow-lg">

      {/* IMAGE */}
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div
          className="
            absolute inset-0 bg-black/50
            flex flex-col items-center justify-center gap-3
            opacity-100 md:opacity-0
            md:group-hover:opacity-100
            transition
          "
        >
          <button
            onClick={() => addToCart(product)}
            className="bg-orange-500 text-white px-6 py-2 rounded font-semibold"
          >
            ADD TO CART
          </button>

          <button
            onClick={() => navigate(`/products/${product.id}`)}
            className="bg-white text-black px-6 py-2 rounded font-semibold"
          >
            VIEW DETAILS
          </button>
        </div>
      </div>

      {/* INFO */}
      <div className="p-6 text-center text-white">
        <h3 className="font-semibold uppercase">
          {product.name}
        </h3>
        <p className="text-orange-400 text-xl font-bold mt-2">
          ₹ {product.price}
        </p>
      </div>
    </div>
  );
}