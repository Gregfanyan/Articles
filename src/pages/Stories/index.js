import React, { useEffect } from "react";

import Description from "../../components/Description";
import Detail from "../../components/Detail";
import Header from "../../components/Header";
import { getStories } from "../../Services/api";
import "./stories.scss";

function Stories({ storyId }) {
  const [story, setStory] = React.useState({});
  const { title, text, url, time } = story;

  //getStories function takes storyId as a distructured props and returns the stories 
  //either top or best stories depending on the click(changeUrlhandleCLick function)
  useEffect(() => {
    getStories(storyId).then((response) => setStory(response));
    return () => {
      setStory({});
    };
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
