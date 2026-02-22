import { useEffect, useState } from "react";
import api from "../services/api";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get("categories/")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-10 sm:mb-14 text-center">
          <p className="text-orange-600 font-pmedium mb-2 text-sm sm:text-base">
            Browse Categories
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-pbold text-black">
            Furniture for Every Space
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              name={cat.name}
              image={cat.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ===========================
   CATEGORY CARD (ROUND)
=========================== */

function CategoryCard({ name, image }) {
  return (
    <div className="text-center group cursor-pointer">

      {/* ROUND IMAGE */}
      <div
        className="
          w-36 h-36
          mx-auto
          rounded-full
          overflow-hidden
          border border-black/10
          bg-gray-100
          group-hover:border-orange-600
          group-hover:shadow-xl
          transition
        "
      >
        <img
          src={image}
          alt={name}
          className="
            w-full h-full
            object-cover
            group-hover:scale-110
            transition duration-300
          "
        />
      </div>

      {/* CATEGORY NAME */}
      <h3
        className="
          mt-5
          font-pmedium
          text-black
          group-hover:text-orange-600
          transition
        "
      >
        {name}
      </h3>

    </div>
  );
}
