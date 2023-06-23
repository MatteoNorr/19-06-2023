import "./index.css";

const Story = ({ story, setSection, index }) => {
  return (
    <li
      onClick={() => {
        setSection();
        index;
      }}
      className="Story"
    >
      <img className="Story__image" src={story.image}></img>
      <p className="Story__username">{story.username}</p>
    </li>
  );
};

export default Story;
