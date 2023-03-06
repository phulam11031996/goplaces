import axios from "axios";
import { DEV_BACKEND_URL } from "@env";

const getTravelData = async (region) => {
  const travelData = await axios
    .get(DEV_BACKEND_URL + "travelinfo/", { params: region })
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

export default {
  register,
  getTravelData,
};
