import axios from "axios";
import { DEV_BACKEND_URL } from "@env";

const getTravelData = async (region) => {
  const travelData = await axios
    .get(DEV_BACKEND_URL + "travelinfo/", { params: region })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return travelData;
};

export default getTravelData;
