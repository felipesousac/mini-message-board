import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/main.css";

const MessageBoard = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080").then((response) => {
      setMessage(response.data);
    });
  }, []);

  return (
    <>
      <div className="w-9/12 border-solid shadow-lg mt-1 p-3 bg-white rounded-lg">
        <h6 className="pb-2 mb-1 border-b border-gray-200 font-medium">
          Messages
        </h6>
        {message.map((message) => (
          <div className="pt-3" key={message.id}>
            <div className="pb-3 mb-0 small lh-125 border-bottom border-gray border-b border-gray-200">
              <div className="flex items-center justify-between">
                <strong className="text-gray-500 block">{message.name}</strong>
                <span className="text-xs text-gray-400 block">
                  {message.datetime}
                </span>
              </div>
              {message.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MessageBoard;
