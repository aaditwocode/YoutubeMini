import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { addMessage } from "../utils/chatSlice";

const mockMessages = [
  { name: "Aaditya", message: "Hey, see this ??" },
  { name: "Rohit", message: "Nice! What is this about?" },
  { name: "Aaditya", message: "Just testing the live chat" },
  { name: "Rohit", message: "Cool! Works fine" },
  { name: "Neha", message: "Good job guys 🚀" },
  { name: "Aaditya", message: "Thanks! 😄" },
  { name: "Rohit", message: "Can we make it auto-scroll?" },
  { name: "Neha", message: "Add emoji support too maybe" },
  { name: "Aaditya", message: "Yeah, on it!" },
];

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
      const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * mockMessages.length);
      const randomMsg = mockMessages[randomIndex];
      dispatch(addMessage(randomMsg));
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return; 

    dispatch(addMessage({ name: "You", message: inputMessage.trim() }));

    setInputMessage(""); 
  };

  // Optional: send on Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full h-[500px] ml-2 p-2 text-black bg-slate-300 border border-rose-700 overflow-y-scroll rounded-md flex flex-col">
      <div className="flex-grow overflow-y-auto">
        {chatMessages.map((msg, index) => (
          <ChatMessage key={index} name={msg.name} message={msg.message} />
        ))}
      </div>

      {/* Input box and send button */}
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-grow px-3 py-1 rounded border border-gray-400"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
