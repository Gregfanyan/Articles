import React, { useEffect } from "react";

import Description from "../../components/Description";
import Detail from "../../components/Detail";
import Header from "../../components/Header";
import { getTopStories } from "../../Services/api";
import "./stories.scss";

function Stories({ storyId }) {
  const [story, setStory] = React.useState({});
  const { title, text, url, time } = story;

  useEffect(() => {
    getTopStories(storyId).then((response) => setStory(response));
  }, [storyId]);

  return (
    <div className="stories-wrapper">
      <a target="_blank" rel="noreferrer" href={url}>
        <Header title={title} />
        <Description text={text} />
        <Detail time={time} />
      </a>
    </div>
  );
}

export default Stories;
