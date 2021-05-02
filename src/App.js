import React, { useState, useEffect } from "react";

import Title from "./components/Title";
import Stories from "./pages/Stories";
import LoadMore from "./components/LoadMore";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import useStories from "./hooks/useStories";
import "./App.scss";

function App() {
  const storiesPerPage = 3;
  const [topStoryIds, bestStoryIds, isClicked, setIsClicked] = useStories();
  const [currentStoryId, setCurrentStoryId] = useState([]);
  const [storiesToShow, setStoriesToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const toShow = topStoryIds.slice(
      storiesToShow.length,
      storiesToShow.length + storiesPerPage
    );
    setStoriesToShow([...storiesToShow, ...toShow]);
  };

  useEffect(() => {
    if (topStoryIds) {
      loopWithSlice();
    }
  }, [topStoryIds]);

  const handleShowMorePosts = () => {
    let loadedMore = next + storiesPerPage;
    loopWithSlice(next, loadedMore);
    setNext(next + storiesPerPage);
  };

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
