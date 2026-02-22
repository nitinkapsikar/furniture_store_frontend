export default function SaleBanner() {
  return (
    <section className="min-h-screen bg-[#111] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT – SALE CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-xs bg-orange-600 text-black rounded-full tracking-wide">
            Limited Time Offer
          </span>

          <h2 className="text-4xl md:text-5xl font-pbold leading-tight mb-6">
            <span className="text-orange-500">100 Days</span> <br />
            Mega Furniture Sale
          </h2>

          <p className="text-gray-400 mb-4 max-w-md">
            Exclusive 100-day furniture sale with special pricing on
            premium sofas, beds, and chairs.
          </p>

          <p className="text-gray-500 mb-8 max-w-md">
            Designed for modern homes. Limited stock. Limited time.
          </p>

          <button className="
            bg-orange-600 hover:bg-orange-700
            text-black font-semibold
            px-8 py-3 rounded-full
            transition
          ">
            Explore Offers
          </button>
        </div>

        {/* RIGHT – STACKED PRODUCT CARDS */}
        <div className="relative h-[340px] flex justify-center items-center">

          {/* CARD 1 – SOFA */}
          <div className="
            absolute left-0 top-0
            w-[360px] h-[220px]
            rounded-2xl overflow-hidden shadow-xl
            transform transition duration-500
            hover:-translate-y-4 hover:z-50
          ">
            <img
              src="/sale-sofa.png"
              alt="Sofa"
              className="w-full h-full object-cover"
            />
            <PriceTag title="Sofa" price="From ₹15,000" />
          </div>

          {/* CARD 2 – BED / COT */}
          <div className="
            absolute left-40 top-10
            w-[360px] h-[220px]
            rounded-2xl overflow-hidden shadow-xl
            transform transition duration-500
            hover:-translate-y-4 hover:z-50
          ">
            <img
              src="/sale-cot.png"
              alt="Bed"
              className="w-full h-full object-cover"
            />
            <PriceTag title="Cot" price="From ₹25,000" />
          </div>

          {/* CARD 3 – CHAIR */}
          <div className="
            absolute left-20 top-28
            w-[360px] h-[220px]
            rounded-2xl overflow-hidden shadow-xl
            transform transition duration-500
            hover:-translate-y-4 hover:z-50
          ">
            <img
              src="/sale-chair.png"
              alt="Chair"
              className="w-full h-full object-cover"
            />
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
