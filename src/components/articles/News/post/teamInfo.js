import React from "react";

const TeamInfo = (props) => {
  return (
    <div>
      <div>
        <div
          className="teamInfo-logo"
          style={{ background: `url('/images/teams/${props.team.logo}')` }}
        ></div>
        <div className="teamInfo-teamname">
          <p>
            {props.team.name}
            <span>:Name</span>
            <br /> {props.team.city}
            <span>:city</span>
          </p>
        </div>
        <div className="teamInfo-wins">
          <strong>
            W{props.team.stats[0].wins} - L {props.team.stats[0].defeats}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
