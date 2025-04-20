import React from "react";
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-6 font-alegreya">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* Brand Section */}
        <div>
          <h1 className="text-white text-2xl font-semibold mb-4">Simplify.AI</h1>
          <p className="text-sm leading-6 text-gray-400">
            Making complex things simple for every Indian language learner, no matter where they’re from.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Noida, Uttar Pradesh, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@simplifyai.in
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-gray-400 mt-2">
            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Simplify.AI — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
