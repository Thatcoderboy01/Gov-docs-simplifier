import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 font-alegreya bg-slate/20 backdrop-blur-lg border-b border-white/30 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text"
        >
          GovtSimplifier.AI
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`relative text-gray-800 font-medium group hover:text-indigo-600 transition-all ${
                location.pathname === item.path ? "text-indigo-600" : ""
              }`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 bg-indigo-500 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Support Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="mailto:support@govtsimplifier.com"
            className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Support
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md py-6 px-6 space-y-4 text-center border-t border-white/30">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 hover:text-indigo-600"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="mailto:support@govtsimplifier.com"
            className="block w-full bg-indigo-600 text-white py-2 rounded-full"
          >
            Support
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
