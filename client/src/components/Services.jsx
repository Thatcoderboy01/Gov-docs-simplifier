import React from 'react';

const Services = () => {
  return (
    <section className="py-20 m-20 bg-white text-center font-alegreya">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="service-card p-8 bg-gray-50 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Text Simplification</h3>
            <p className="text-gray-600 mb-4">
              Simplify complex texts into clear and concise language, perfect for everyone.
            </p>
            <button className="text-indigo-600 font-semibold hover:underline transition">
              Learn More
            </button>
          </div>
          <div className="service-card p-8 bg-gray-50 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Document Conversion</h3>
            <p className="text-gray-600 mb-4">
              Convert various file formats with ease — from PDF to DOCX, JPG, and more.
            </p>
            <button className="text-indigo-600 font-semibold hover:underline transition">
              Learn More
            </button>
          </div>
          <div className="service-card p-8 bg-gray-50 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Document Management</h3>
            <p className="text-gray-600 mb-4">
              Organize and manage all your important documents in one secure place.
            </p>
            <button className="text-indigo-600 font-semibold hover:underline transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
