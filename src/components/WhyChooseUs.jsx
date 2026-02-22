import { FiTruck, FiShield, FiStar, FiRefreshCcw } from "react-icons/fi";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <p className="text-orange-600 font-pmedium mb-2 text-sm sm:text-base">
            Why Choose Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-pbold text-black">
            Crafted for Comfort & Trust
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">

          <FeatureCard
            icon={<FiStar />}
            title="Premium Quality"
            desc="Carefully crafted furniture using top-grade materials for long-lasting comfort."
          />

          <FeatureCard
            icon={<FiTruck />}
            title="Free Delivery"
            desc="Fast and free delivery on all orders with safe and secure packaging."
          />

          <FeatureCard
            icon={<FiShield />}
            title="Secure Payment"
            desc="100% secure payment options ensuring your data and money are safe."
          />

          <FeatureCard
            icon={<FiRefreshCcw />}
            title="Easy Returns"
            desc="Hassle-free 7-day return policy for a worry-free shopping experience."
          />

        </div>

      </div>
    </section>
  );
}

/* FEATURE CARD */
function FeatureCard({ icon, title, desc }) {
  return (
    <div
      className="
        bg-black
        rounded-2xl
        p-6 sm:p-8
        text-center
        shadow-lg
        hover:shadow-2xl
        transition-all duration-300
        group
        hover:-translate-y-2
      "
    >
      <div
        className="
          w-12 h-12 sm:w-14 sm:h-14
          mx-auto mb-4 sm:mb-5
          flex items-center justify-center
          rounded-full
          bg-orange-600
          text-black
          text-xl sm:text-2xl
          group-hover:bg-white
          group-hover:text-orange-600
          transition
        "
      >
        {icon}
      </div>

      <h3 className="font-pbold text-base sm:text-lg mb-3 text-white">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}