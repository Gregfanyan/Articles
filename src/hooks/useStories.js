import { useState, useEffect } from "react";
import axios from "axios";
import { topStoriesUrl, bestStoriesUrl } from "../Services/api";

function useStories() {
  const [topStoryIds, setTopStoryIds] = useState([]);
  const [bestStoryIds, setBestStoryIds] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    axios
      .get(topStoriesUrl)
      .then((response) => {
        setTopStoryIds(response.data);
        setIsClicked(true);
      })
      .catch((e) => console.log("error"));
  }, []);

  useEffect(() => {
    axios
      .get(bestStoriesUrl)
      .then((response) => {
        setBestStoryIds(response.data);
        setIsClicked(false);
      })
      .catch((e) => console.log("error"));
  }, []);

  return [topStoryIds, bestStoryIds, isClicked, setIsClicked];
}

export default useStories;
