import React, { useState } from "react";
import { MapPin, Mail, Phone, User, MessageCircle } from "lucide-react";
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-20 mt-20 mb-20 px-6 font-alegreya">
      <Toaster position="top-right" richColors />
      <h1 className="text-center font-alegreya font-bold py-8 text-4xl ">Feel Free To Ask</h1>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Map + Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.37939077618!2d77.36104185!3d28.630433950000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54531379a03%3A0xb4e631abf06c6e36!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1713621615884!5m2!1sen!2sin"
            className="w-full h-80 rounded-xl border"
            loading="lazy"
          ></iframe>

          <div className="text-gray-700 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="text-indigo-600" size={20} />
              <span>Sector 62, Noida, UP, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-indigo-600" size={20} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-indigo-600" size={20} />
              <span>contact@yourwebsite.com</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Send us a message</h3>

          <div className="flex flex-col space-y-2">
            <label className="text-sm text-gray-600">Name</label>
            <div className="flex items-center bg-white px-3 py-2 rounded-md border">
              <User size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm text-gray-600">Email</label>
            <div className="flex items-center bg-white px-3 py-2 rounded-md border">
              <Mail size={18} className="text-gray-400 mr-2" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm text-gray-600">Message</label>
            <div className="flex items-start bg-white px-3 py-2 rounded-md border">
              <MessageCircle size={18} className="text-gray-400 mt-1 mr-2" />
              <textarea
                rows="4"
                required
                placeholder="Write something..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full outline-none text-sm bg-transparent resize-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition text-sm"
          >
            Send
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
