import React from "react";
import TeamInfo from "../News/post/teamInfo";

const Header = (props) => {
  const teamNfo = (team) => {
    return team ? <TeamInfo team={team} /> : null;
  };

  return <div className="videolist-wrapper">{teamNfo(props.teamData)}</div>;
};

export default Header;
