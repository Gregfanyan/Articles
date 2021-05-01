import React from "react";

import { mapTime } from "../../utils/mapTime";
import "./detail.scss";

function Detail({ time }) {
  return (
    <div className="detail">
      <i className="fa fa-clock-o"></i> &nbsp; {mapTime(time)} ago | 50 comments
    </div>
  );
}

export default Detail;
