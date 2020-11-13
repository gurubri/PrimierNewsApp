import React from "react";
import VideoList from "../widgets/videolist/videolist";

const VideosMain = () => {
  return (
    <div>
      <VideoList
        type="card"
        loadmore={true}
        start={0}
        amount={10}
        title={true}
      />
    </div>
  );
};

export default VideosMain;
