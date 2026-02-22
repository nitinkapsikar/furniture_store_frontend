import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

import Logo from "../logo";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "your order", path: "/orders" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const { cartItems } = useCart(); // 🔥 CART CONTEXT
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🧮 total quantity (important)
  const cartCount = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <header
      className={`
        sticky top-0 z-50 h-20 bg-black
        transition-all duration-300
        ${scrolled ? "border-b-2 border-orange-600" : "border-b border-white/10"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* LEFT – LOGO */}
        <Logo />

        {/* CENTER – MENU */}
        <div className="hidden md:flex font-pbold text-sm gap-10 text-white">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative py-1 transition
                ${
                  isActive
                    ? "text-orange-600 before:scale-x-100"
                    : "text-white hover:text-orange-500"
                }
                before:content-['']
                before:absolute
                before:-top-2
                before:left-0
                before:h-[2px]
                before:w-full
                before:bg-orange-600
                before:origin-left
                before:scale-x-0
                before:transition-transform
                before:duration-300`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* RIGHT – CART + LOGIN */}
        <div className="flex items-center gap-6">

          {/* CART ICON */}
          <Link to="/cart">
          <div
            className="
              relative cursor-pointer
              w-10 h-10
              flex items-center justify-center
              rounded-full
              bg-black
              hover:bg-gray-900
              transition
            "
          >
            <FiShoppingCart className="text-lg text-white hover:text-orange-500 transition" />

            {/* 🔥 CART COUNT BADGE */}
            {cartCount > 0 && (
              <span
                className="
                  absolute -top-2 -right-2
                  bg-orange-600 text-white
                  text-[10px] font-bold
                  w-5 h-5
                  flex items-center justify-center
                  rounded-full
                "
              >
                {cartCount}
              </span>
            )}
          </div>
          </Link>

          {/* LOGIN BUTTON */}
          <button
            className="
              text-xs px-5 py-2 rounded-full
              bg-orange-600 text-white font-pmedium
              hover:bg-orange-700
              hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]
              transition
            "
          >
            Login
          </button>

        </div>
      </nav>
    </header>
  );
}