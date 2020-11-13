import React from "react";
import SideNav from "react-simple-sidenav";
import SideNavItems from "./sidenav_items";

const SideNavIgation = (props) => {
  return (
    <div>
      <SideNav showNav={props.showNav} onHideNav={props.onHideNav}>
        <div className="sideNavMain">
          Premier League
          <br /> News App
        </div>
        <SideNavItems {...props} />
      </SideNav>
    </div>
  );
};
export default SideNavIgation;
