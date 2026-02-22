import { FiMail } from "react-icons/fi";

export default function Newsletter() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="
          bg-[#111]
          rounded-3xl
          px-8 py-14
          md:px-16
          grid grid-cols-1 md:grid-cols-2
          gap-12
          items-center
          border border-white/10
        ">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-orange-600 font-pmedium mb-3">
              Stay Updated
            </p>

            <h2 className="
              text-3xl sm:text-4xl
              font-pbold text-white
              leading-tight mb-4
            ">
              Subscribe to Our <br />
              Newsletter
            </h2>

            <p className="text-gray-400 max-w-md">
              Get exclusive offers, new arrivals, and interior inspiration
              delivered straight to your inbox.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="
                flex flex-col sm:flex-row
                gap-4
                w-full
              "
            >
              <div className="relative w-full">
                <FiMail className="
                  absolute left-4 top-1/2 -translate-y-1/2
                  text-gray-400
                " />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="
                    w-full
                    pl-12 pr-4 py-3
                    rounded-full
                    bg-[#1a1a1a]
                    text-white
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2 focus:ring-orange-600
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  px-8 py-3
                  bg-orange-600
                  text-black
                  font-pmedium
                  rounded-full
                  hover:bg-orange-700 hover:text-white
                  transition
                  whitespace-nowrap
                "
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
