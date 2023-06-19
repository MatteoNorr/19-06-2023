import Topbar from "./components/Topbar";
import Posts from "./components/Posts";
import Stories from "./components/Stories";
import { useState } from "react";
import { storiesUserMock } from "./components/storiesUsersMock";
import { postsMock } from "./components/Posts/postsMock";
import "./App.css";

function App() {
  const [stories, setStories] = useState(storiesUserMock);
  const [post, setPost] = useState(postsMock);

  return (
    <>
      <Topbar />
      <Stories stories={stories} />
      <Posts post={post} />
    </>
  );
}

export default App;
