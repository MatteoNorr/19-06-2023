import Topbar from "./components/Topbar";
import Posts from "./components/Posts";
import Stories from "./components/Stories";
import Camera from "./components/Camera";
import IGTV from "./components/IGTV";
import Messages from "./components/Messages";
import SwiperRender from "./components/Swiper";
import { GET } from "./components/utils/https";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [section, setSections] = useState("home");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // fetch stories
    GET("https://api.npoint.io/3c613f25cc62d6741d8c").then((data) =>
      setStories(data)
    );

    // fetch post
    GET("https://api.npoint.io/8be99baa9f2796022b55").then((data) =>
      setPosts(data)
    );

    // fetch messages
    GET("https://api.npoint.io/45615d0ddef177eef95b").then((data) =>
      setMessages(data)
    );
  }, []);

  const onClickRenderStory = () => {
    setSections("storyRender");
  };

  const render = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories
              stories={stories}
              onClickRenderStory={onClickRenderStory}
              setSection={onClickRenderStory}
            />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera />;
      case "IGTV":
        return <IGTV />;
      case "messages":
        return <Messages messages={messages} />;
      case "storyRender":
        return (
          <SwiperRender
            stories={posts}
            setSection={() => setSections("home")}
          />
        );
    }
  };

  return (
    <>
      <Topbar setSections={setSections} />
      {render()}
    </>
  );
}

export default App;
