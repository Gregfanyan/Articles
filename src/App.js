import React, { useEffect } from "react";

import Title from "./components/Title";
import Stories from "./pages/Stories";
import LoadMore from "./components/LoadMore";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import useStories from "./hooks/index";

import "./App.scss";

function App() {
  const [storyIds, fetchTopStory] = useStories();
  //console.log(storyIds);

  //console.log(fetchTopStory(27001961));

  /*   useEffect(() => {
    fetchTopStory(27004534).then((response) => console.log("check", response));
  }, []); */

  return (
    <div className="App">
      <Title />
      <Buttons />
      {storyIds &&
        storyIds
          .slice(0, 3)
          .map((storyId) => (
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
