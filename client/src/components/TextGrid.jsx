import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard"; // Importing copy-to-clipboard library
import { FaFileAlt, FaMagic, FaGlobe } from "react-icons/fa"; // Importing icons from react-icons

const TextGrid = ({ originalText, simplifiedText, translatedText }) => {
  const [copiedText, setCopiedText] = useState(""); // State to track which text was copied

  // Function to reset copied state after 2 seconds
  const handleCopy = (text) => {
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000); // Reset after 2 seconds
  };

  return (
    <div className="mt-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 px-4 font-alegreya">
      {/* Original Text */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300 relative overflow-hidden">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
          <FaFileAlt className="mr-3 text-indigo-600" /> {/* React Icon for Original Text */}
          Original Text
        </h3>
        <textarea
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-700 mb-4 resize-none"
          value={originalText}
          readOnly
          rows={6} // Making the text field bigger
        />
        <CopyToClipboard text={originalText} onCopy={() => handleCopy("original")}>
          <button className="absolute top-4 right-4 px-2 py-1 bg-slate-400 text-white rounded-md text-sm hover:bg-slate-600 transition duration-200">
            {copiedText === "original" ? "Copied" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>

      {/* Simplified Text */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300 relative overflow-hidden">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
          <FaMagic className="mr-3 text-green-600" /> {/* React Icon for Simplified Text */}
          Simplified Text
        </h3>
        <textarea
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-700 mb-4 resize-none"
          value={simplifiedText}
          readOnly
          rows={6} // Making the text field bigger
        />
        <CopyToClipboard text={simplifiedText} onCopy={() => handleCopy("simplified")}>
          <button className="absolute top-4 right-4 px-3 py-1 bg-slate-400 text-white rounded-md text-sm hover:bg-slate-600 transition duration-200">
            {copiedText === "simplified" ? "Copied" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>

      {/* Translated Text */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-300 relative overflow-hidden">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center">
          <FaGlobe className="mr-3 text-blue-600" /> {/* React Icon for Translated Text */}
          Translated Text
        </h3>
        <textarea
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-700 mb-4 resize-none"
          value={translatedText}
          readOnly
          rows={6} // Making the text field bigger
        />
        <CopyToClipboard text={translatedText} onCopy={() => handleCopy("translated")}>
          <button className="absolute top-4 right-4 px-3 py-1 bg-slate-400 text-white rounded-md text-sm hover:bg-slate-600 transition duration-200">
            {copiedText === "translated" ? "Copied" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default TextGrid;
