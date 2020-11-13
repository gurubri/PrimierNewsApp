import React from "react";
import { Link } from "react-router-dom";
import CardInfo from "../cardinfo/cardinfo";

const VideolistTemplate = (props) => {
  return props.data.map((item, i) => {
    return (
      <Link to={`/videos/${item.id}`} key={i}>
        <div className="wrapper">
          <div
            className="left"
            style={{
              background: `url(/images/articles/${item.image})`,
            }}
          >
            <div
              style={{
                background: `url(/images/play.png)`,
              }}
            ></div>
          </div>

          <div className="right">
            <h2>{item.title}</h2>
          </div>
          <CardInfo teams={props.teams} team={item.team} date={item.date} />
        </div>
      </Link>
    );
  });
};

export default VideolistTemplate;
