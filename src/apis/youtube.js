import axios from "axios";

// Set up axios default params
// baseURL to Youtube API and default request
// parameters required by Youtube API in their documentation
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: process.env.REACT_APP_KEY,
  },
});
