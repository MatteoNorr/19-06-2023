import Like from "../icons/Like";
import "./index.css";

const Posts = ({ post }) => {
  return (
    <div className="Post">
      {post.map((post) => (
        <div key={post.id}>
          <div className="Post__info">
            <img className="user-img" src={post.userImage} />
            <div className="user-info">
              <p className="username">{post.userName}</p>
              <p className="user-location">{post.location}</p>
            </div>
          </div>
          {post.media.map((media) => (
            <div className="Post__img" key={post.id}>
              <img src={media.src} />
            </div>
          ))}
          {post.comments.map((comment) => (
            <div key={post.id}>
              <Like />
              <div className="Post__comment" key={post.id}>
                <div className="liked">
                  <img
                    className="Post__comment__user-img"
                    src={post.userImage}
                  />
                  <p>{`Liked by ${post.userName}`}</p>
                </div>
              </div>
              <div className="comment">
                <p className="Post__comment__user-username">
                  {comment.userName}
                </p>
                <p className="Post__comment__user-content">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Posts;
