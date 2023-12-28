import "../styles/main.css";
import MessageBoard from "./MessageBoard";

const Body = () => {
  return (
    <div className="flex flex-col items-center justify-top h-screen">
      <MessageBoard />
    </div>
  );
};

export default Body;
