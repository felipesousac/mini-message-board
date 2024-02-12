import { useState } from "react";
import axios from "axios";

const Form = ({ onSaveMessage }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const addUser = async () => {
    onSaveMessage(name, text);

    setName("");
    setText("");
  };

  return (
    <form className="w-9/12 border-solid shadow-lg mt-1 p-3 bg-white rounded-lg flex flex-col">
      <input
        className="p-2 mb-1 border-b border-gray-300 font-medium"
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="p-2 mb-1 border-b border-gray-300 font-medium"
        type="text"
        name="text"
        value={text}
        placeholder="Message"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="p-2 mb-1 border-b border-gray-300 font-medium bg-slate-800 text-slate-200"
        type="button"
        onClick={addUser}
      >
        Post new message
      </button>
    </form>
  );
};

export default Form;
