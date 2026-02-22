export default function SaleBanner() {
  return (
    <section className="bg-[#111] text-white py-16 md:min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center md:text-left">
      <span className="inline-block mb-4 px-4 py-1 text-xs bg-orange-600 text-black rounded-full tracking-wide">
        Limited Time Offer
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-pbold leading-tight mb-6">
        <span className="text-orange-500">100 Days</span> <br />
        Mega Furniture Sale
      </h2>

      <p className="text-gray-400 mb-4 max-w-md mx-auto md:mx-0">
        Exclusive 100-day furniture sale with special pricing on
        premium sofas, beds, and chairs.
      </p>

      <p className="text-gray-500 mb-8 max-w-md mx-auto md:mx-0">
        Designed for modern homes. Limited stock. Limited time.
      </p>

      <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-black font-semibold px-8 py-3 rounded-full transition">
        Explore Offers
      </button>
    </div>

    {/* RIGHT PRODUCTS */}
    <div className="relative hidden md:flex h-[340px] justify-center items-center">

      {/* DESKTOP STACKED VERSION */}

      <div className="absolute left-0 top-0 w-[320px] h-[200px] rounded-2xl overflow-hidden shadow-xl hover:-translate-y-4 transition">
        <img src="/sale-sofa.png" className="w-full h-full object-cover" />
        <PriceTag title="Sofa" price="From ₹15,000" />
      </div>

      <div className="absolute left-32 top-10 w-[320px] h-[200px] rounded-2xl overflow-hidden shadow-xl hover:-translate-y-4 transition">
        <img src="/sale-cot.png" className="w-full h-full object-cover" />
        <PriceTag title="Cot" price="From ₹25,000" />
      </div>

      <div className="absolute left-16 top-24 w-[320px] h-[200px] rounded-2xl overflow-hidden shadow-xl hover:-translate-y-4 transition">
        <img src="/sale-chair.png" className="w-full h-full object-cover" />
        <PriceTag title="Chair" price="From ₹8,000" />
      </div>
    </div>

    {/* MOBILE VERSION (STACK VERTICAL) */}
    <div className="md:hidden space-y-6 mt-8">

      <div className="rounded-2xl overflow-hidden shadow-xl">
        <img src="/sale-sofa.png" className="w-full h-52 object-cover" />
        <PriceTag title="Sofa" price="From ₹15,000" />
      </div>

      <div className="rounded-2xl overflow-hidden shadow-xl">
        <img src="/sale-cot.png" className="w-full h-52 object-cover" />
        <PriceTag title="Cot" price="From ₹25,000" />
      </div>

      <div className="rounded-2xl overflow-hidden shadow-xl">
        <img src="/sale-chair.png" className="w-full h-52 object-cover" />
        <PriceTag title="Chair" price="From ₹8,000" />
      </div>

    </div>

  </div>
</section>
  );
}

/* PRICE TAG COMPONENT */
function PriceTag({ title, price }) {
  return (
    <div className="
      absolute bottom-4 left-4
      bg-black/70 backdrop-blur
      px-4 py-2 rounded-lg
    ">
      <p className="text-sm font-pmedium">{title}</p>
      <p className="text-orange-400 text-sm font-pbold">{price}</p>
    </div>
  );
}
