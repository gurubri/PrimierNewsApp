import React from "react";

import NewsSlider from "../widgets/newsslider/slider";
import NewsList from "../widgets/newslist/newslist";
import VideoList from "../widgets/videolist/videolist";
const Home = () => {
  return (
    <div>
      <NewsSlider
        type="new"
        start={3}
        amount={10}
        settings={{
          dots: true,
        }}
      />
      <NewsList type="card" loadmore={true} start={0} amount={4} />
      <VideoList
        type="card"
        loadmore={true}
        start={0}
        amount={4}
        title={true}
      />
    </div>
  );
};
export default Home;
