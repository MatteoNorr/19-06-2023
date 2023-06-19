import Story from "../Story";
import "./index.css";

const Stories = ({ stories }) => (
  <div className="Stories">
    <ul className="Stories__list">
      {stories.map((story) => (
        <Story story={story} key={story.id} />
      ))}
    </ul>
  </div>
);

export default Stories;
