import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

const SideNavItems = (props) => {
  const items = [
    {
      type: "options",
      icon: "home",
      text: "Home",
      link: "/",
    },
    {
      type: "options",
      icon: "file-word",
      text: "News",
      link: "/news",
    },
    {
      type: "options",
      icon: "play",
      text: "Videos",
      link: "/videos",
    },
    {
      type: "options",
      icon: "lock-open",
      text: "Sign in",
      link: "/sign-in",
    },
    {
      type: "options",
      icon: "lock",
      text: "Sign out",
      link: "/sign-out",
    },
  ];
  const showItems = () => {
    return items.map((item, i) => {
      return (
        <div key={i} className={item.type} onClick={props.onHideNav}>
          <Link to={item.link}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    });
  };

  return <div>{showItems()}</div>;
};
export default SideNavItems;
