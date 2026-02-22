import { FiStar } from "react-icons/fi";

export default function TestimonialCard({ data }) {
  return (
    <div className="
      bg-white
      rounded-2xl
      p-8
      text-center
      shadow-md
      hover:shadow-2xl
      transition
      max-w-sm
      mx-auto
      hover:-translate-y-2
    ">

      {/* USER IMAGE */}
      <div className="flex justify-center mb-5">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-600">
          <img
            src={data.image || "/user-placeholder.png"}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* STARS */}
      <div className="flex justify-center gap-1 text-orange-500 mb-4">
        {[...Array(data.rating || 5)].map((_, i) => (
          <FiStar key={i} size={14} />
        ))}
      </div>

      {/* REVIEW */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        “{data.review}”
      </p>

      {/* NAME */}
      <h4 className="text-black font-pmedium tracking-wide">
        {data.name}
      </h4>
    </div>
  );
}
