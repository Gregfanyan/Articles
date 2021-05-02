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

  //defining the function will take the initial state and add 3 more stories
  const loopWithSlice = (start, end) => {
    const toShow = currentStoryId.slice(
      storiesToShow.length,
      storiesToShow.length + storiesPerPage
    );
    setStoriesToShow([...storiesToShow, ...toShow]);
  };

  useEffect(() => {
    if (topStoryIds) {
      setStoriesToShow(currentStoryId.slice(0, storiesPerPage));
    }
  }, [topStoryIds, currentStoryId]);

  //handleShowMoreStories for loading more articles 
  const handleShowMoreStories = () => {
    let loadedMore = next + storiesPerPage;
    loopWithSlice(next, loadedMore);
    setNext(next + storiesPerPage);
  };

  //changing the URL onClick
  const changeUrlhandleCLick = () => {
    setIsClicked(!isClicked);
  };

  //changing the URL based on the boolean
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
      <LoadMore handleShowMoreStories={handleShowMoreStories} />
      <Footer />
    </div>
  );
}

export default App;
