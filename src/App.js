import React, { useState, useEffect} from "react";

import Title from "./components/Title";
import Stories from "./pages/Stories";
import LoadMore from "./components/LoadMore";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import useStories from "./hooks/useStories";
import "./App.scss";

function App() {
  const storiesPerPage = 3;
  let arrayForHoldingStories = [];
  const [topStoryIds, bestStoryIds, isClicked, setIsClicked] = useStories();
  const [currentStoryId, setCurrentStoryId] = useState([]);
  const [storiesToShow, setStoriesToShow] = useState([]);
  const [next, setNext] = useState(3);

  const changeUrlhandleCLick = () => {
    setIsClicked(!isClicked);
  };

  const loopWithSlice = (start, end) => {
    const slicedStories = currentStoryId.slice(start, end);
    arrayForHoldingStories = [...arrayForHoldingStories, ...slicedStories];
    setStoriesToShow(arrayForHoldingStories);
  };

  useEffect(() => {
    loopWithSlice(0, storiesPerPage);
  }, [currentStoryId]);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + storiesPerPage);
    setNext(next + storiesPerPage);
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
      {storiesToShow &&
        storiesToShow.map((storyId) => (
          <Stories storyId={storyId} key={storyId} />
        ))}
      <LoadMore handleShowMorePosts={handleShowMorePosts} />
      <Footer />
    </div>
  );
}

export default App;
