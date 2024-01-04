import "../styles/main.css";
import Form from "./Form";
import MessageBoard from "./MessageBoard";

const Body = () => {
  return (
    <div className="flex flex-col items-center justify-top h-screen">
      <div className="w-9/12 border-solid shadow-lg mt-1 p-3 bg-white rounded-lg flex flex-col">
        <h6 className="pb-1 mb-1 font-medium">Messages</h6>
      </div>
      <MessageBoard />
      <Form />
    </div>
  );
};

export default Body;
