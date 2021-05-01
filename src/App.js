import React /* , { useState } */ from "react";

import Title from "./components/Title";
import Stories from "./pages/Stories";
import LoadMore from "./components/LoadMore";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import useStories from "./hooks/useStories";

import "./App.scss";

function App() {
  const [topStoryIds, bestStoryIds] = useStories();

  /*   const [story, setStory] = useState([]);

  React.useEffect(() => {
    storyIds.forEach((storyId) =>
      getTopStories(storyId).then((response) => setStory(response))
    );
  }, []); */

  return (
    <div className="App">
      <Title />
      <Buttons />
      {topStoryIds &&
        topStoryIds
          .slice(0, 3)
          .map((storyId) => <Stories storyId={storyId} key={storyId} />)}
      <LoadMore />
      <Footer />
    </div>
  );
}

export default App;
