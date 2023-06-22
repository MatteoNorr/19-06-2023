import { useState, useEffect, useRef } from "react";
import { filters } from "../mocks/filters";
import "./index.css";

const Camera = () => {
  const [camera, setConstraints] = useState({
    audio: false,
    video: { width: 300, height: 1080 },
  });

  const videoRef = useRef(null);
  const [filter, setFilter] = useState({});
  const applyFilter = (filter) => setFilter(filter);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia(camera).then((mediaStream) => {
      videoRef.current.srcObject = mediaStream;
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play();
      };
    });
  }, []);

  return (
    <div className="Camera">
      <video ref={videoRef} className={`Camera__render ${filter}`}></video>
      <div className="Filters">
        <ul>
          {filters.map((filter) => (
            <li onClick={() => applyFilter(filter.name)}>
              <img
                className={filter.name}
                src="https://picsum.photos/60"
                alt=""
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Camera;
