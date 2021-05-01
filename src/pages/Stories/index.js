import React from "react";

import Description from "../../components/Description";
import Detail from "../../components/Detail";
import Header from "../../components/Header";
import "./Stories.scss";

function Stories({ storyId, fetchTopStory }) {
  const [story, setStory] = React.useState({});

  React.useEffect(() => {
    fetchTopStory(storyId).then((response) => setStory(response));
  }, []);

  //const stories = story.slice(0, 3);
  //console.log(story);

  const { title, text, url, time } = story;

  console.log("story", story);

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
