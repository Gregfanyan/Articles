import React from "react";

import Description from "../../components/Description";
import Detail from "../../components/Detail";
import Header from "../../components/Header";
import './Stories.scss'

function Stories() {
  return (
    <div className='stories-wrapper'>
      <Header />
      <Description />
      <Detail />
    </div>
  );
}

export default Stories;
