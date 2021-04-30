import React from "react";

import "./footer.scss";

import hackernews from "../../logos/hackernews1.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={hackernews} height={20} alt="hackernews" />
    </div>
  );
}

export default Footer;
