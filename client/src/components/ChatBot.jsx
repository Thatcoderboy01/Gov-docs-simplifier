import React, { useState } from "react";
import axios from "axios";
import { MessageSquare } from "lucide-react";
import { IoCloseCircle } from "react-icons/io5"; // Icon for close button

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to toggle chat visibility

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    // Add the user's message to the chat
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    setLoading(true);
    setInput(""); // Clear input field

    try {
      // Send the message to your backend API (which will forward it to OpenAI API)
      const response = await axios.post("https://your-backend-api.com/chat", {
        message: input,
      });

      // Add the bot's response to the chat
      setMessages([
        ...newMessages,
        { sender: "bot", text: response.data.reply },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chatbot UI */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 w-96 h-96 bg-white rounded-lg shadow-lg flex flex-col">
          <div className="flex justify-between items-center p-3 bg-blue-500 text-white rounded-t-lg">
            <span>AI Chat Assistant</span>
            <button
              onClick={() => setIsOpen(false)} // Close chat window
              className="text-2xl"
            >
              <IoCloseCircle />
            </button>
          </div>
          <div className="flex-1 overflow-auto p-3 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white text-right"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form className="flex p-2" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 rounded-lg border-2 border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 ml-2 bg-blue-500 rounded-full text-white hover:bg-blue-600"
              disabled={loading}
            >
              <MessageSquare size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
