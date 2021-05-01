import React from "react";

import "./header.scss";

function Header({ title }) {
  return <div>{title && <div className="header">{title}</div>}</div>;
}

export default Header;
