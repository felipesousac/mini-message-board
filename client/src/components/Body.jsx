import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/main.css";
import Form from "./Form";
import MessageBoard from "./MessageBoard";

const Body = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080").then((response) => {
      setMessage(response.data);
    });
  }, []);

  async function onSaveMessage(name, text) {
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post(
        "http://localhost:8080/new",
        {
          name,
          text,
        },
        headers
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });

    const newMessage = {
      name,
      datetime: new Date().toDateString(),
      text,
    };

    setMessage([...message, newMessage]);
  }

  return (
    <div className="flex flex-col items-center justify-top h-screen">
      <div className="w-9/12 border-solid shadow-lg mt-1 p-3 bg-white rounded-lg flex flex-col">
        <h6 className="pb-1 mb-1 font-medium">Messages</h6>
      </div>
      <MessageBoard message={message} />
      <Form onSaveMessage={onSaveMessage} />
    </div>
  );
};

export default Body;
