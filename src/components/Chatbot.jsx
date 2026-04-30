import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    setMessages([...messages, { role: "user", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Ask me about Guna, his projects, or AI services.",
        },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-blue-500 p-4 rounded-full"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-gray-900 rounded-xl p-4 shadow-lg">
          <div className="h-64 overflow-y-auto mb-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`mb-2 ${m.role === "user" ? "text-blue-400" : "text-green-400"}`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <input
            className="w-full p-2 bg-black border border-gray-700 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={sendMessage}
            className="mt-2 w-full bg-blue-500 p-2 rounded"
          >
            Send
          </button>
        </div>
      )}
    </>
  );
}
