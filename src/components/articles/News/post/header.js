import React from "react";
import TeamInfo from "./teamInfo";

const Header = (props) => {
  const teamNfo = (team) => {
    return team ? <TeamInfo team={team} /> : null;
  };

  const postData = (date, author) => <PostData data={{ date, author }} />;

  return (
    <div className="teamInfo">
      {teamNfo(props.teamData)}
      {postData(props.date, props.author)}
    </div>
  );
};

export default Header;
const PostData = (props) => {
  return (
    <div>
      <div className="teamInfo-author">
        Author:
        <span>{props.data.author}</span>
      </div>
      <div className="teamInfo-date">
        Date:
        <span>{props.data.date}</span>
      </div>
    </div>
  );
};
