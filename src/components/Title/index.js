import React from "react";

import "./title.scss";

import hackernews from "../../logos/hackernews.svg";

function Title() {
  return (
    <div className="title-section">
      <img
        className="title-section__img"
        src={hackernews}
        height={25}
        alt="hackernews"
      />
    </div>
  );
}

export default Title;
