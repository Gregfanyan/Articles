import React, { useEffect, useState } from "react";

import Title from "./components/Title";
import Stories from "./pages/Stories";
import LoadMore from "./components/LoadMore";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import useStories from "./hooks/index";

import "./App.scss";

function App() {
  const [storyIds, fetchTopStory] = useStories();

  //console.log("test random", storyIds[Math.floor(Math.random() * 3)]);

  return (
    <div className="App">
      <Title />
      <Buttons />
      {storyIds &&
        storyIds.map((storyId) => (
          <Stories
            storyId={storyId}
            key={storyId}
            fetchTopStory={fetchTopStory}
          />
        ))}
      <LoadMore />
      <Footer />
    </div>
  );
}

export default App;
