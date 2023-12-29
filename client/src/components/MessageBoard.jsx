import "../styles/main.css";

const MessageBoard = () => {
  const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
    },
    {
      text: "Hi there!",
      user: "Bibi",
      added: new Date(),
    },
    {
      text: "Hello World!",
      user: "Perigosa",
      added: new Date(),
    },
  ];

  return (
    <>
      <div class="w-9/12 border-solid shadow-lg mt-1 p-3 bg-white rounded-lg">
        <h6 class="pb-2 mb-1 border-b border-gray-200 font-medium">Messages</h6>
        {messages.map((message) => (
          <div class="pt-3">
            <p class="pb-3 mb-0 small lh-125 border-bottom border-gray border-b border-gray-200">
              <div className="flex items-center justify-between">
                <strong class="text-gray-500 block">{message.user}</strong>
                <span className="text-xs text-gray-400 block">
                  {message.added.toLocaleDateString()}
                </span>
              </div>
              {message.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MessageBoard;
