import axios from "axios";

const KEY = "AIzaSyCAeS_YmaYe0mdJZKcquer0LtTG4inw1P0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: `${KEY}`
  }
});
