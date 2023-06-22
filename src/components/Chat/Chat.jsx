import "./index.css";

const Chat = ({ chat, name }) => {
  return (
    <>
      <div className="Chat">
        <div className="Chat__container">
          <div className="Chat__info">
            <img src={chat.participants[1].avatar_url} />
            <h2 className="Chat__title">
              {chat.messages[1].sender !== "John"
                ? chat.messages[1].sender
                : chat.messages[0].sender}
            </h2>
            <p className="Chat__status">{chat.is_online && "• online"}</p>
          </div>
          <div className="Chat__messages">
            {chat.messages.map((message) => (
              <div className="Chat__message">
                <p
                  className={
                    message.sender === "John" ? "my-message" : "your-message"
                  }
                >
                  {message.content}
                </p>
              </div>
            ))}
          </div>
          <div className="Chat__type">
            <input type="text" placeholder="Type your message" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
