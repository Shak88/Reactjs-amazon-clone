import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-18bba.cloudfunctions.net/api", // THE API (cloud function) URL
});

export default instance;
