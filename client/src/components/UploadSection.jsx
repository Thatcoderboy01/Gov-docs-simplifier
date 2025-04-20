import React, { useState, useEffect } from "react";
import axios from "axios";
import TextGrid from "./TextGrid";

const Upload = () => {
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [originalText, setOriginalText] = useState("");
  const [simplifiedText, setSimplifiedText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("hi");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (simplifiedText) {
      // Language change hone par simplified text ko translate karein
      translateText(simplifiedText, language);
    }
  }, [language, simplifiedText]); // language or simplifiedText change hone par translation update hoga

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setFileName(file.name);
    setMessage("");
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      setMessage("");

      const response = await axios.post("https://httpbin.org/post", formData);

      if (response.status === 200) {
        setMessage("✅ File uploaded successfully!");

        const extracted = "You are hereby instructed to fill the form within 7 working days.";
        setOriginalText(extracted);

        const simplified = await simplifyText(extracted);
        setSimplifiedText(simplified); // Simplified text set karenge

        setFileName("");
        setSelectedFile(null);
      } else {
        setMessage("❌ Upload failed.");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const simplifyText = async (text) => {
    return `Please complete the form within 7 days.`;
  };

  const translateText = async (text, lang) => {
    const dummyTranslations = {
      hi: "कृपया 7 दिनों के अंदर फॉर्म भरें।",
      pa: "ਕਿਰਪਾ ਕਰਕੇ 7 ਦਿਨਾਂ ਦੇ ਅੰਦਰ ਫਾਰਮ ਭਰੋ।",
      mr: "कृपया 7 दिवसांत फॉर्म भरा.",
      en: text,
    };
    const translated = dummyTranslations[lang] || text;
    setTranslatedText(translated); // Translate karne par translated text set karenge
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value); // Language change hone par state update hoga
  };

  return (
    <section className="py-20 px-6  min-h-screen flex flex-col items-center font-alegreya">
      <h2 className="text-3xl font-bold mb-4">Upload Government Document</h2>
      <p className="text-gray-600 mb-6">Supported formats: PDF, DOCX, JPG</p>

      <label
        htmlFor="file-upload"
        className="cursor-pointer w-full max-w-xl p-10 border-2 border-dashed border-indigo-500 rounded-lg bg-white hover:bg-indigo-50 transition text-center"
      >
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <p className="text-gray-700">
          {fileName ? `📄 ${fileName}` : "Click or drag your file here to upload"}
        </p>
      </label>

      <button
        onClick={handleUpload}
        disabled={!selectedFile || loading}
        className={`mt-8 px-8 py-3 rounded-full font-medium transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
        }`}
      >
        {loading ? "Uploading..." : "Upload Now"}
      </button>

      {message && (
        <p className="mt-4 text-lg font-semibold text-green-600">{message}</p>
      )}

      {originalText && (
        <TextGrid
          originalText={originalText}
          simplifiedText={simplifiedText}
          translatedText={translatedText}
        />
      )}

      <div className="mt-6">
        <label htmlFor="language" className="mr-4 text-lg">
          Choose Language:
        </label>
        <select
          id="language"
          value={language}
          onChange={handleLanguageChange}
          className="py-2 px-4 border rounded-lg"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="pa">Punjabi</option>
          <option value="mr">Marathi</option>
        </select>
      </div>
    </section>
  );
};

export default Upload;
