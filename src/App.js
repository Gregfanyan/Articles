import React, { useState, useEffect } from "react";

import Title from "./components/Title";
import Stories from "./pages/Stories";
import LoadMore from "./components/LoadMore";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import useStories from "./hooks/useStories";

import "./App.scss";

function App() {
  const [topStoryIds, bestStoryIds, isClicked, setIsClicked] = useStories();
  const [currentStoryId, setCurrentStoryId] = useState([]);

  const changeUrlhandleCLick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    isClicked
      ? setCurrentStoryId(bestStoryIds)
      : setCurrentStoryId(topStoryIds);
  }, [topStoryIds, bestStoryIds, isClicked]);

  return (
    <div className="App">
      <Title />
      <Buttons
        changeUrlhandleCLick={changeUrlhandleCLick}
        isClicked={isClicked}
      />
      {currentStoryId &&
        currentStoryId
          .slice(0, 3)
          .map((storyId) => <Stories storyId={storyId} key={storyId} />)}
      <LoadMore />
      <Footer />
    </div>
  );
}

export default App;
