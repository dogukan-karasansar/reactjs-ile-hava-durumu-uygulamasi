import axios from "axios";

const Api = axios.create({
  baseURL: process.env.REACT_APP_OPENWEATHER_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;
