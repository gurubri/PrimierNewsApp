import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

import SideNav from "./sidenav";
const Header = (props) => {
  const navBars = () => (
    <div className="bars">
      <FontAwesome name="bars" onClick={props.onOpenNav} className="fa" />
    </div>
  );
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
  const showItem = () => {
    return items.map((item, i) => {
      return (
        <div key={i} className="navItems">
          <Link to={item.link}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    });
  };
  const logo = () => (
    <Link to="/" className="logo">
      <img alt="pl Logo" src="/images/pllogo.png" />
    </Link>
  );

  return (
    <header className="header">
      {showItem()}
      <SideNav {...props} />
      <div className="headerOptions">
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};
export default Header;
