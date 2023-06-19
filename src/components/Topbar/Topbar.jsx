import { CameraIcon, Logo, IGTV, Shape } from "../icons";

import "./index.css";

const Topbar = () => {
  return (
    <div className="Topbar">
      <div className="CameraIcon">
        <CameraIcon />
      </div>
      <div className="Logo">
        <Logo />
      </div>
      <div className="icons">
        <IGTV />
        <Shape />
      </div>
    </div>
  );
};

export default Topbar;
