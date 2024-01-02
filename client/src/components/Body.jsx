import "../styles/main.css";
import MessageBoard from "./MessageBoard";
import Form from "./Form";

const Body = () => {
  return (
    <div className="flex flex-col items-center justify-top h-screen">
      <MessageBoard />
      <Form />
    </div>
  );
};

export default Body;
