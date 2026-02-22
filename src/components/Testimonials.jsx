import { useEffect, useState } from "react";
import api from "../services/api";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("testimonials/")
      .then((res) => {
        setTestimonials(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-orange-600 font-pmedium mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-pbold text-white">
            What Our Customers Say
          </h2>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-gray-400">
            Loading testimonials...
          </p>
        )}

        {/* EMPTY */}
        {!loading && testimonials.length === 0 && (
          <p className="text-center text-gray-400">
            No testimonials available
          </p>
        )}

        {/* GRID */}
        {!loading && testimonials.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} data={item} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
