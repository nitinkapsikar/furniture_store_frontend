import { useEffect, useState } from "react";
import axios from "axios";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // ✅ PRICE STATE ADD
  const [maxPrice, setMaxPrice] = useState(50000);

  useEffect(() => {
   axios.get("https://furniture-store-backend-muci.onrender.com/api/products/")
      .then(res => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      });
  }, []);

  // ✅ CATEGORY + PRICE FILTER
useEffect(() => {
  let result = products;

  // ✅ CATEGORY FILTER (USE category_name)
  if (selectedCategory !== "all") {
    result = result.filter(
      (p) =>
        typeof p.category_name === "string" &&
        p.category_name.toLowerCase().includes(selectedCategory)
    );
  }

  // ✅ PRICE FILTER (STRING → NUMBER)
  result = result.filter(
    (p) => Number(p.price) <= maxPrice
  );

  setFilteredProducts(result);
}, [selectedCategory, maxPrice, products]);

  return (
    <section className="min-h-screen">
    
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">

        {/* LEFT FILTER */}
        <aside className="bg-white border-r-2 border-black">
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
        </aside>

        {/* PRODUCTS */}
        <main className="bg-gray-50 px-6 py-16">
          <h1 className="text-4xl font-semibold mb-12 text-black">
            Our Products
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>

      </div>
    </section>
  );
}