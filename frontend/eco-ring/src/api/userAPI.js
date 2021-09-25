/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import apiURL from "./apiurl";

export default {
  authRegister(data) {
    return axios.post(apiURL + "auth/register/", data);
  },
  authLogin(data) {
    return axios.post(apiURL + "auth/login/", data);
  },
};
