import React from "react";

import "./description.scss";

function Description({ text }) {
  return (
    <>
      {text ? (
        <div className="description">{text}</div>
      ) : (
        <div className="description">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, …when an unknown printer took a galley of type and scrambled
        </div>
      )}
    </>
  );
}

export default Description;
