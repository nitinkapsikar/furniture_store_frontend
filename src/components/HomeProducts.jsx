import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function HomeProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://furniture-store-backend.onrender.com/api/products/")
      .then(res => {
        // Home page साठी limited products
        setProducts(res.data.slice(0, 6));
      });
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-14">
          <h2 className="text-3xl font-semibold">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2">
            Handpicked furniture for modern homes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}