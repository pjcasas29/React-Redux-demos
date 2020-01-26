import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 618f062d5bfc759f0b95add288d1f578d63491301c83848f386502a47dd5f6d6"
  }
});
