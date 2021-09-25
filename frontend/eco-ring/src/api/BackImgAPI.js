/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import apiURL from "./apiurl";

export default {
  createBackImage(data) {
    return axios.post(apiURL + "image/", data);
  },
  getBackImage(data) {
    return axios.get(apiURL + "image/")
  }
}