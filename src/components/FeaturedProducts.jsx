import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("products/")
      .then(res => {
        setProducts(res.data.slice(0, 3));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-10 sm:mb-14 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl text-black font-semibold">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Handpicked furniture for modern homes
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}