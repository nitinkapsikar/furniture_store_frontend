import { FaInstagram, FaFacebookF, FaTwitter,  FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
   <section className="relative bg-[#F5F5F5] overflow-hidden">

  {/* LEFT SOCIAL ICONS (Desktop Only) */}
  <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col gap-4 bg-black px-3 py-4 rounded-r-3xl z-20">
    <FaInstagram className="text-white hover:text-orange-600 transition" size={16} />
    <FaFacebookF className="text-white hover:text-orange-600 transition" size={16} />
    <FaTwitter className="text-white hover:text-orange-600 transition" size={16} />
    <FaLinkedinIn className="text-white hover:text-orange-600 transition" size={16} />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12">

    {/* LEFT CONTENT */}
    <div className="text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pbold leading-tight mb-6 text-black">
        <span className="text-orange-700">Timeless</span> Furniture <br />
        for Modern Homes
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md mx-auto md:mx-0 mb-8">
        Thoughtfully designed furniture for modern living.
        Minimal forms, timeless comfort.
      </p>

      <button className="w-full sm:w-auto px-6 py-3 bg-orange-600 text-white rounded-md font-pmedium hover:bg-orange-700 transition">
        Purchase Now
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <div className="relative w-72 sm:w-80 md:w-96 aspect-square">

        {/* Blob */}
        <div className="absolute inset-0 bg-blue-600 rounded-[60%_40%_55%_45%/55%_60%_40%_45%] z-0"></div>

        {/* Badge 1 */}
        <div className="hidden sm:block absolute top-4 left-0 bg-black text-white px-4 py-2 rounded-xl shadow-lg z-20 text-center">
          <p className="text-xs text-gray-300">Furniture</p>
          <p className="text-lg font-pbold text-orange-500">120+</p>
        </div>

        {/* Badge 2 */}
        <div className="hidden sm:block absolute bottom-4 right-0 bg-white text-black px-4 py-2 rounded-xl shadow-lg z-20 text-center">
          <p className="text-xs text-gray-500">Customer Rating</p>
          <p className="text-lg font-pbold text-orange-600">4.9 ★</p>
        </div>

        <img
          src="/hero-chair.png"
          alt="Furniture Chair"
          className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
    </div>

  </div>
</section>
  );
}
