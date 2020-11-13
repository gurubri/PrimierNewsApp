import React from "react";
import Slick from "react-slick";
import { Link } from "react-router-dom";

const SliderTemplaates = (props) => {
  let template = null;
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    SlidesToScroll: 1,
    ...props.settings,
  };

  switch (props.type) {
    case "new":
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            <div className="item">
              <div
                className="image"
                style={{
                  background: `url(../images/articles/${item.image})`,
                }}
              ></div>
              <Link to={`/articles/${item.id}`}>
                <div className="caption">{item.title}</div>
              </Link>
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slick {...settings}>{template}</Slick>;
};
export default SliderTemplaates;
