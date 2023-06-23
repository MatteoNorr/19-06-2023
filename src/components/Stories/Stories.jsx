import Story from "../Story";
import "./index.css";
import SwiperRender from "../Swiper";

const Stories = ({ stories, setSection }) => (
  <div className="Stories">
    <ul className="Stories__list">
      {stories.map((story, index) => (
        <Story
          story={story}
          key={story.id}
          setSection={setSection}
          index={index}
        />
      ))}
    </ul>
  </div>
);

export default Stories;
