import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-8 border-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold tracking-wide">
            Furni<span className="text-gray-400">Store</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Premium furniture crafted for modern living. Comfort, quality and style in every piece.
          </p>

          <div className="flex gap-4 mt-6">
            <FaFacebookF className="hover:text-gray-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer transition" />
            <FaTwitter className="hover:text-gray-400 cursor-pointer transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-medium mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Sofas</li>
            <li className="hover:text-white cursor-pointer">Chairs</li>
            <li className="hover:text-white cursor-pointer">Tables</li>
            <li className="hover:text-white cursor-pointer">Beds</li>
          </ul>
        </div>

        {/* Contact */}
      {/* Contact */}
<div>
  <h3 className="text-lg font-medium mb-4">Contact</h3>
  <ul className="space-y-2 text-gray-400 text-sm">
    <li>Email: support@furnistore.com</li>
    <li>Location: Worldwide Shipping</li>
    <li>Customer Support: 24/7 Available</li>
  </ul>
</div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FurniStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;