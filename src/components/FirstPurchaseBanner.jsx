export default function FirstPurchaseBanner() {
  return (
    <section className="min-h-screen bg-black flex items-center">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full">

        {/* CARD */}
        <div className="
          bg-[#D9EEE1]
          rounded-2xl
          overflow-hidden
          text-black
          grid grid-cols-1 md:grid-cols-2
          items-center
          shadow-2xl
        ">

          {/* LEFT – TEXT */}
          <div className="p-10 sm:p-14">
          

            <h2 className="
              text-3xl sm:text-4xl md:text-5xl
              font-pbold leading-tight mb-6
            ">
              Get <span className="text-orange-600">10% OFF</span> <br />
              On Your First Purchase
            </h2>

            <p className="text-gray-700 max-w-md mb-8">
              Welcome to premium furniture shopping.
              Enjoy an exclusive discount on your very first order.
              Limited time only.
            </p>

          
          </div>

          {/* RIGHT – IMAGE */}
          <div className="
            relative
            h-[280px] sm:h-[320px] md:h-[360px]
            bg-[#092B1B]
            p
            flex items-center justify-center
          ">
            <img
              src="/furniture.png"
              alt="Furniture Offer"
              className="w-full  object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
