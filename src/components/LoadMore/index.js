import React from "react";

import "./loadMore.scss";

function LoadMore({ handleShowMoreStories }) {
  return (
    <div className="loadMore">
      <button onClick={handleShowMoreStories} className="loadMore__btn">
        load more
      </button>
    </div>
  );
}

export default LoadMore;
