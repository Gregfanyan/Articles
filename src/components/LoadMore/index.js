import React from "react";

import "./loadMore.scss";

function LoadMore({handleShowMorePosts}) {
  return (
    <div className="loadMore">
      <button onClick={handleShowMorePosts} className="loadMore__btn">load more</button>
    </div>
  );
}

export default LoadMore;
