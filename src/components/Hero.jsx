import { FaInstagram, FaFacebookF, FaTwitter,  FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-[#F5F5F5] overflow-hidden">

      {/* LEFT SIDE SOCIAL ICONS */}
      <div
  className="
    hidden md:flex
    absolute left-0 top-1/2 -translate-y-1/2
    flex-col gap-4
    bg-black
    px-3 py-4
    rounded-r-4xl
    rounded-l-none
    z-20
  "
>
  <a href="#" className="text-white hover:text-orange-600 transition">
    <FaInstagram size={16} />
  </a>
  <a href="#" className="text-white hover:text-orange-600 transition">
    <FaFacebookF size={16} />
  </a>
  <a href="#" className="text-white hover:text-orange-600 transition">
    <FaTwitter size={16} />
  </a>
  <a href="#" className="text-white hover:text-orange-600 transition">
    <FaLinkedinIn size={16} />
  </a>
</div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-20 grid grid-cols-12 items-center ">

        {/* LEFT CONTENT */}
        <div className="col-span-12   md:col-start-2 md:col-span-5 ">
          <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-pbold leading-tight mb-6 text-black
          ">
            <span className="text-orange-700">Timeless</span> Furniture <br />
            <span className="text-black">for Modern Homes</span>
          </h1>

          <p className="
            text-sm sm:text-base md:text-lg
            text-gray-700 max-w-md mb-8
          ">
            Thoughtfully designed furniture for modern living.
            Minimal forms, timeless comfort.
          </p>

          <button className="
            px-6 py-3
            bg-orange-600 text-white
            rounded-md font-pmedium
            hover:bg-orange-700 transition
          ">
            Purchase Now
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        {/* RIGHT SIDE IMAGE */}
<div className="col-span-12 md:col-span-6 flex justify-center mt-16 md:mt-0">
  <div className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px]">

    {/* BLOB BACKGROUND */}
    <div
      className="
        absolute inset-0
        bg-blue-600
        rounded-[60%_40%_55%_45%/55%_60%_40%_45%]
        z-0
      "
    ></div>

    {/*     🔢 BADGE 1 – Furniture Available */}
<div
  className="
    absolute top-6 -left-10
    bg-black text-white
    px-5 py-3
    rounded-xl
    shadow-xl
    w-[140px]
    z-20
    text-center
    animate-float
    hover:scale-105
    transition
  "
>
  <p className="text-xs text-gray-300">Furniture</p>
  <p className="text-xl font-pbold text-orange-500">120+</p>
</div>


    {/* ⭐ BADGE 2 – Rating / Trust */}
<div
  className="
    absolute bottom-8 -right-10
    bg-white text-black
    px-5 py-3
    rounded-xl
    w-35
    shadow-xl
    z-20
    text-center
    animate-float-slow
    hover:scale-105
    hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]
    transition
  "
>
  <p className="text-xs text-gray-500">Customer Rating</p>
  <p className="text-lg font-pbold text-orange-600">4.9 ★</p>
</div>


    {/* CHAIR IMAGE */}
    <img
      src="/hero-chair.png"
      alt="Furniture Chair"
      className="
        relative z-10
        w-full h-full
        object-contain
        drop-shadow-2xl
      "
    />
  </div>
</div>


      </div>
    </section>
  );
}
