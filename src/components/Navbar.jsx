import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Logo from "../logo";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Your Order", path: "/orders" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const { cartItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <header
      className={`sticky top-0 z-50 bg-black transition-all duration-300
      ${scrolled ? "border-b-2 border-orange-600" : "border-b border-white/10"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between text-white">

        {/* LOGO */}
        <Logo />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex font-pbold text-sm gap-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600"
                  : "hover:text-orange-500 transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* CART */}
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-xl hover:text-orange-500 transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* LOGIN (Hide on very small screens) */}
          <button className="hidden sm:block text-xs px-4 py-2 rounded-full bg-orange-600 hover:bg-orange-700 transition">
            Login
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block text-white hover:text-orange-500 transition"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}