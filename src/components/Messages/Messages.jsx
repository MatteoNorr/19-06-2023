import { SearchIcon } from "../icons";
import { SendPicture } from "../icons";

import "./index.css";

const Messages = ({ messages }) => {
  return (
    <div className="Messages">
      <div className="Messages__input">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <h2 className="Messages__title">Messages</h2>
      {messages
        .sort((post, post2) => post.lastAccess - post2.lastAccess)
        .map((message) => (
          <div className="message" key={Math.random() * 100}>
            <div className="message__photo">
              <img src={message.userImg} alt="" />
            </div>
            <div className="message__from">
              <p>{message.userName}</p>
              <p>{message.message}</p>
            </div>
            <div className="lastAccess">
              <p>{message.lastAccess + "m"}</p>
              <SendPicture />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Messages;
