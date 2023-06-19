import "./index.css";

const Story = ({ story }) => {
  return (
    <li className="Story">
      <img className="Story__image" src={story.image}></img>
      <p className="Story__username">{story.username}</p>
    </li>
  );
};

export default Story;
