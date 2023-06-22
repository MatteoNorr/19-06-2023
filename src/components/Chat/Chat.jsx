import "./index.css";

const Chat = ({ chat, name }) => {
  return (
    <>
      <div className="Chat">
        {chat.messageList
          .filter((message) => message.participants[1].username === name)
          .map((message) => (
            <div className="Chat__container">
              <div className="Chat__info">
                <img src={message.participants[1].avatar_url} />
                <h2 className="Chat__title">
                  {message.messages[1].sender !== "John"
                    ? message.messages[1].sender
                    : message.messages[0].sender}
                </h2>
                <p className="Chat__status">
                  {message.is_online && "• online"}
                </p>
              </div>
              <div className="Chat__messages">
                {message.messages.map((message) => (
                  <div className="Chat__message">
                    <p
                      className={
                        message.sender === "John"
                          ? "my-message"
                          : "your-message"
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
          ))}
      </div>
    </>
  );
};

export default Chat;
