import axios from "axios";
import { DEV_BACKEND_URL } from "@env";

const fetchVisitedPlaces = async (userEmail) => {
  const result = await axios
    .get(DEV_BACKEND_URL + "api/visitedplace", {
      params: { userEmail: userEmail },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {});
  return result;
};

const fetchSavedPlaces = async (userEmail) => {
  const result = await axios
    .get(DEV_BACKEND_URL + "api/savedplace", {
      params: { userEmail: userEmail },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {});
  return result;
};

// const postSavePlace = async (userEmail, placeInfo) => {
const postSavePlace = async (placeInfo) => {
  const userEmail = "asd@gmail.com";
  const result = await axios
    .post(DEV_BACKEND_URL + "api/savedplace", { userEmail, placeInfo })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {});
  return result;
};

const postVisitedPlaces = async (userEmail, placeInfo) => {
  const result = await axios
    .post(DEV_BACKEND_URL + "api/visitedplace", { userEmail, placeInfo })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {});
  return result;
};

const getTravelData = async (region, pre) => {
  const travelData = await axios
    .get(DEV_BACKEND_URL + "travelinfo/", {
      params: { region: region, pre: pre },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {});
  return travelData;
};

const register = async (newAccount) => {
  const isRegister = await axios
    .post(DEV_BACKEND_URL + "api/register", newAccount)
    .then((res) => {
      console.warn(res.data.messages);
      return true;
    })
    .catch((err) => {
      console.error(err.response.data.messages);
      return false;
    });
  return isRegister;
};

const login = async (loginInfo) => {
  const isLogin = await axios
    .post(DEV_BACKEND_URL + "api/login", loginInfo)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      console.error(err.response.data.error);
      return false;
    });
  return isLogin;
};

export default {
  register,
  login,
  getTravelData,
  postSavePlace,
  postVisitedPlaces,
  fetchSavedPlaces,
  fetchVisitedPlaces,
};
