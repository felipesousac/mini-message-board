import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  return (
    <form
      method="POST"
      action="http://localhost:8080/new"
      className="w-9/12 border-solid shadow-lg mt-1 p-3 bg-white rounded-lg flex flex-col"
    >
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
        type="submit"
      >
        Post new message
      </button>
    </form>
  );
};

export default Form;
