import "../styles/main.css";
import Message from "./Message";

const MessageBoard = () => {
  return (
    <>
      <div class="w-9/12 border-solid shadow-lg mt-1 p-3 bg-white rounded-lg">
        <h6 class="pb-2 mb-1 border-b border-gray-200">Messages</h6>
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </>
  );
};

export default MessageBoard;
