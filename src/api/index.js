import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // <-- your backend server port
});

export default API;
