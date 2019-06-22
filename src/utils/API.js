import axios from "axios";

// https://randomuser.me/api/

export default axios.create({
//   baseURL: "http://localhost:3001/",
  responseType: "json"
});