import React from "react";
import FontAwesome from "react-fontawesome";

const Cardinfo = (props) => {
  const teamName = (teams, team) => {
    let data = teams.find((item) => {
      return item.id === team;
    });
    if (data) {
      return data.name;
    }
  };

  return (
    <div className="container">
      <span className="team">{teamName(props.teams, props.team)}</span>
      <span className="date">
        <FontAwesome name="clock" />
        {props.date}
      </span>
    </div>
  );
};

export default Cardinfo;
