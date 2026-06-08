import Axios from "axios";

const Api = Axios.create({
  baseURL: "http://localhost:8080/api",
  // timeout: 1000,
  // headers: {
  // "Content-Type": "application/json",
  // "Content-Type": "multipart/form-data",
  // },
});
export default Api;
