import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // For styling

const UploadedFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch files on component mount
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=6");
        const mockFiles = response.data.map((file, index) => ({
          name: file.title.slice(0, 20) + ".pdf",
          status: index % 2 === 0 ? "Processed" : "Pending",
          date: new Date().toISOString().slice(0, 10),
        }));

        setFiles(mockFiles);
        setLoading(false);

        // Success toast
        toast.success("Documents loaded successfully!");
      } catch (error) {
        console.error("Failed to fetch files:", error);
        
        // Error toast
        toast.error("Failed to load documents. Please try again!");
      }
    };

    fetchFiles();
  }, []);

  // Loading state while data is being fetched
  if (loading) return <p className="text-center py-10 text-lg">Loading uploaded files...</p>;

  return (
    <section className="px-6 py-16 bg-gray-50 mt-10 font-alegreya">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 animate__animated animate__fadeInUp">
        Your Uploaded Documents
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate__animated animate__fadeIn animate__delay-1s">
        {files.map((file, index) => (
          <div key={index} className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:translate-y-1">
            <h3 className="text-lg font-semibold text-gray-800">{file.name}</h3>
            <p className="text-sm text-gray-500">Uploaded on: {file.date}</p>
            <p className={`text-sm font-medium mt-2 ${file.status === "Processed" ? "text-green-600" : "text-yellow-600"}`}>
              Status: {file.status}
            </p>
            <button className="mt-4 text-indigo-600 font-semibold hover:underline transition duration-300 transform hover:scale-110">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={true} />
    </section>
  );
};

export default UploadedFiles;
