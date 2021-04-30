import React from "react";

import './Title.scss'

import hackernews from "../../logos/hackernews.svg";

function Title() {
  return (
    <div className='title-section'>
      <img src={hackernews} height={25} alt="hackernews" />
    </div>
  );
}

export default Title;
