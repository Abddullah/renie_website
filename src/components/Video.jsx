import React from "react";
import ReactPlayer from "react-player";
const Video = () => {
  return (
    <div className="h-[618px]">
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://youtu.be/9KF20n_BsjY?si=6e7x0Go0CI-dvCBm"
      />
    </div>
  );
};

export default Video;
