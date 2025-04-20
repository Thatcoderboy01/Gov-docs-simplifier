import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    question: "Which file formats are supported?",
    answer: "We support PDF, DOCX, and JPG formats for uploading government documents.",
  },
  {
    question: "What happens after I upload a file?",
    answer: "The document is simplified and translated into your selected language for better understanding.",
  },
  {
    question: "How do I change the language?",
    answer: "Use the language dropdown to choose your preferred language. The translated text updates instantly.",
  },
  {
    question: "Is my data safe?",
    answer: "Yes, your document is processed securely. We do not store any files on our servers.",
  },
  {
    question: "Can I see the original and translated text together?",
    answer: "Yes, once processed, all versions—original, simplified, and translated—are displayed side by side.",
  },
  {
    question: "How long does the processing take?",
    answer: "It usually takes just a few seconds after uploading the file.",
  },
  {
    question: "Can I use this on mobile?",
    answer: "Absolutely! Our platform is fully responsive and works smoothly on mobile devices.",
  },
  {
    question: "Who can I contact for support?",
    answer: "You can reach out to our support team via the contact section at the bottom of the page.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl m-20 mx-auto mt-20 px-4 font-alegreya">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm bg-white transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-800 hover:bg-indigo-50 transition"
            >
              <span className="flex items-center gap-2">
                <FaQuestionCircle className="text-indigo-600" />
                {faq.question}
              </span>
              <FaChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-indigo-600" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
