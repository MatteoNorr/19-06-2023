import { useState } from "react";
import { SearchIcon } from "../icons";
import { SendPicture } from "../icons";
import Chat from "../Chat/index";
import "./index.css";

const Messages = ({ messages }) => {
  const [chat, setChat] = useState("");

  const onClickOnChat = (name) => setChat(name);
  const renderSingleChat = () => <Chat chat={chat} />;

  return (
    <div className="Messages">
      <div className="Messages__input">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <h2 className="Messages__title">Messages</h2>
      {(chat === "" &&
        messages.messageList.map((message) => (
          <div
            className="message"
            key={Math.random() * 100}
            onClick={() => onClickOnChat(message)}
          >
            <div className="message__photo">
              <img src={message.participants[1].avatar_url} alt="" />
            </div>
            <div className="message__from">
              <p>{message.participants[1].username}</p>
              <p>
                {message.messages[2]?.content || message.messages[1].content}
              </p>
            </div>
            <div className="lastAccess">
              <p className="message__status">
                {(message.is_online && "• online") || "• offline"}
              </p>
              <SendPicture />
            </div>
          </div>
        ))) ||
        renderSingleChat()}
    </div>
  );
};

export default Messages;
