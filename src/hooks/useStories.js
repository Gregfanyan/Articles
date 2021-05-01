import { useState, useEffect } from "react";
import axios from "axios";
import { topStoriesUrl, bestStoriesUrl } from "../Services/api";

function useStories() {
  const [topStoryIds, setTopStoryIds] = useState([]);
  const [bestStoryIds, setBestStoryIds] = useState([]);

  useEffect(() => {
    axios
      .get(topStoriesUrl)
      .then((response) => setTopStoryIds(response.data))
      .catch((e) => console.log("error"));
  }, []);

  useEffect(() => {
    axios
      .get(bestStoriesUrl)
      .then((response) => setBestStoryIds(response.data))
      .catch((e) => console.log("error"));
  }, []);

  return [topStoryIds, bestStoryIds];
}

export default useStories;
