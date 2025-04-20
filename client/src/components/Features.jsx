import React from "react";

const Features = () => {
  return (
    <section className="py-20 mt-20 mb-20  font-alegreya  text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800 animate__animated animate__fadeIn">
        Our Key Features
      </h2>
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Feature 1 */}
        <div className="feature-item bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 hover:bg-indigo-50 duration-300">
          <div className="feature-icon mb-4 transition-transform transform hover:rotate-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 mx-auto text-indigo-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m0 0l3-3m-3 3V4m0 0H9m3 0h3"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">Easy Upload</h3>
          <p className="text-lg text-gray-700">
            Upload documents with ease, simply drag and drop or choose files from your device.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-item bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 hover:bg-indigo-50 duration-300">
          <div className="feature-icon mb-4 transition-transform transform hover:rotate-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 mx-auto text-indigo-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">Text Extraction</h3>
          <p className="text-lg text-gray-700">
            Automatically extract text from PDF, DOCX, and other document formats.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-item bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 hover:bg-indigo-50 duration-300">
          <div className="feature-icon mb-4 transition-transform transform hover:rotate-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 mx-auto text-indigo-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a3 3 0 013-3h12a3 3 0 013 3v14a3 3 0 01-3 3H6a3 3 0 01-3-3V5z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">Text Simplification</h3>
          <p className="text-lg text-gray-700">
            Use AI-powered simplification to make text easier to understand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
