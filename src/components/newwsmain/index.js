import React from "react";
import NewsSlider from "../widgets/newsslider/slider";
import NewsList from "../widgets/newslist/newslist";

const NewsMain = () => {
  return (
    <div>
      <NewsSlider
        type="new"
        start={3}
        amount={10}
        settings={{
          dots: false,
        }}
      />
      <NewsList type="card" loadmore={true} start={0} amount={10} />
    </div>
  );
};

export default NewsMain;
