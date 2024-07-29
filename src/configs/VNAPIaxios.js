import axios from "axios";

const instance = axios.create({
  baseURL: "https://vapi.vnappmob.com/api",
});

instance.interceptors.response.use(
  (response) => {
    return response.data.results;
  }
);

export default instance;
