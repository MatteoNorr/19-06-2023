import Reactions from "../Reactions";

const Post = ({ post }) => {
  return (
    <>
      {post.media.map((media) => (
        <div className="Post__img" key={post.id}>
          <img src={media.src} />
        </div>
      ))}
      <Reactions />
      {post.comments.map((comment) => (
        <div className="Post__comment" key={post.id}>
          <div className="liked">
            <img className="Post__comment__user-img" src={post.userImage} />
            <p>{`Liked by ${post.userName}`}</p>
          </div>
          <div className="comment">
            <p className="Post__comment__user-username">{comment.userName}</p>
            <p className="Post__comment__user-content">{comment.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
