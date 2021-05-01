import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getTopStories = async (storyId) => {
  return await axios
    .get(`${storyUrl}${storyId}.json`)
    .then(({ data }) => data)
    .catch((e) => console.log("error"));
};
