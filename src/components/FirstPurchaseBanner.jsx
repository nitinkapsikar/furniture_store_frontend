export default function FirstPurchaseBanner() {
  return (
    <section className="bg-black py-16 md:min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">

        <div
          className="
            bg-[#D9EEE1]
            rounded-2xl
            overflow-hidden
            text-black
            grid grid-cols-1 md:grid-cols-2
            items-center
            shadow-2xl
          "
        >

          {/* LEFT – TEXT */}
          <div className="p-8 sm:p-12 md:p-14 text-center md:text-left">

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-pbold leading-tight mb-6">
              Get <span className="text-orange-600">10% OFF</span> <br />
              On Your First Purchase
            </h2>

            <p className="text-gray-700 max-w-md mx-auto md:mx-0 mb-8 text-sm sm:text-base">
              Welcome to premium furniture shopping.
              Enjoy an exclusive discount on your very first order.
              Limited time only.
            </p>

            <button className="w-full sm:w-auto px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition">
              Shop Now
            </button>

          </div>

          {/* RIGHT – IMAGE */}
          <div className="bg-[#092B1B] flex items-center justify-center p-6 sm:p-8">
            <img
              src="/furniture.png"
              alt="Furniture Offer"
              className="w-full max-w-sm object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}