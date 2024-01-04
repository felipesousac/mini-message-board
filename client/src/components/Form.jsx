import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const addUser = async (e) => {
    e.preventDefault();

    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post(
        "http://localhost:8080/new",
        {
          name: name,
          text: text,
        },
        headers
      )
      .then(function (response) {
        console.log(response);

        // Reset the form
        setName("");
        setText("");

        // Refresh the page - not the best solution, working in a better one
        window.location.reload();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <form
      onSubmit={addUser}
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
