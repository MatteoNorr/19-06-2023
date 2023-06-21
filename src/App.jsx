import Topbar from "./components/Topbar";
import Posts from "./components/Posts";
import Stories from "./components/Stories";
import Camera from "./components/Camera";
import IGTV from "./components/IGTV";
import Messages from "./components/Messages";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [section, setSections] = useState("home");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // fetch stories
    fetch("https://api.npoint.io/3c613f25cc62d6741d8c")
      .then((res) => res.json())
      .then((data) => setStories(data));

    // fetch post
    fetch("https://api.npoint.io/8be99baa9f2796022b55")
      .then((res) => res.json())
      .then((data) => setPosts(data));

    // fetch messages
    fetch("https://api.npoint.io/824c8271a896d440321f")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const render = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories stories={stories} />
            <Posts posts={posts} />
          </>
        );
      case "camera":
        return <Camera />;
      case "IGTV":
        return <IGTV />;
      case "messages":
        return <Messages messages={messages} />;
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
