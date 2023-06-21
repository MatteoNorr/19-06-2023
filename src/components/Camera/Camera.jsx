import { useState, useEffect } from "react";
import "./index.css";

const Camera = () => {
  const [camera, setConstraints] = useState({
    audio: false,
    video: { width: 500, height: 1080 },
  });

  useEffect(() => {
    const video = document.querySelector("video");

    navigator.mediaDevices.getUserMedia(camera).then((mediaStream) => {
      video.srcObject = mediaStream;
      video.onloadedmetadata = () => {
        video.play();
      };
    });
  }, []);

  return <video className="Camera"></video>;
};

export default Camera;
