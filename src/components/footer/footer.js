import React from "react";
import { Link } from "react-router-dom";

import { CURRENT_YEAR } from "../../config";
const Footer = () => (
  <div className="footer">
    <Link to="/" className="logo">
      <img alt="pl Logo" src="/images/pllogo.png" />
    </Link>
    <div className="right">@PL {CURRENT_YEAR} All rights Reserved &#169;</div>
  </div>
);
export default Footer;
