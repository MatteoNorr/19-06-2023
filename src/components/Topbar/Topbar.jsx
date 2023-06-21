import "./index.css";
import { CameraIcon, Logo, IGTVIcon, MessageIcon } from "../icons";

const Topbar = ({ setSections }) => {
  const openCamera = (setSection) => setSections(setSection);
  const returnHomePage = (setSection) => setSections(setSection);
  const launchIGTV = (setSection) => setSections(setSection);
  const sendMessage = (setSection) => setSections(setSection);

  return (
    <div className="Topbar">
      <div className="CameraIcon" onClick={() => openCamera("camera")}>
        <CameraIcon />
      </div>
      <div className="Logo" onClick={() => returnHomePage("home")}>
        <Logo />
      </div>
      <div className="icons">
        <div className="IGTVIcon" onClick={() => launchIGTV("IGTV")}>
          <IGTVIcon />
        </div>
        <div className="Messages" onClick={() => sendMessage("messages")}>
          <MessageIcon />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
