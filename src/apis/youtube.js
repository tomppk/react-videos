import axios from "axios";

const KEY = "AIzaSyCOuMegtWhLd3mbq86HvpdpxPy90wcCzYk";

// Set up axios default params
// baseURL to Youtube API and default request
// parameters required by Youtube API in their documentation
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
