import Post from "../Post";
import { OthersActions } from "../icons";

import "./index.css";

const Posts = ({ posts }) => {
  return (
    <div className="Posts">
      {posts.map((post) => (
        <div className="Post" key={post.id}>
          <div className="Post__info">
            <img className="user-img" src={post.userImage} />
            <div className="user-info">
              <p className="username">{post.userName}</p>
              <p className="user-location">{post.location}</p>
            </div>
            <OthersActions />
          </div>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
