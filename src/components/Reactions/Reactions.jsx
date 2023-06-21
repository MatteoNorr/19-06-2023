import "./index.css";
import Like from "../icons/Like";
import Comment from "../icons/Comment";
import { MessageIcon } from "../icons";

const Reactions = () => {
  return (
    <div className="Reactions">
      <Like />
      <Comment />
      <MessageIcon />
    </div>
  );
};

export default Reactions;
