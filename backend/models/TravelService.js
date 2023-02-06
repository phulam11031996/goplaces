const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const ParseData = require("../helpers/ParseData");

const getTravelInfo = async (params) => {
  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng",
    params: {
      longitude: params.longitude,
      latitude: params.latitude,
      lunit: "km",
      currency: "USD",
      lang: "en_US",
    },
    headers: {
      "X-RapidAPI-Key": process.env.TRAVELADVISOR_API_KEY,
      "X-RapidAPI-Host": process.env.TRAVELADVISOR_API_HOST,
    },
  };

  const travelData = await axios
    .request(options)
    .then((res) => {
      const parseData = new ParseData.ParseData(res.data);
      return parseData.getCleanData();
    })
    .catch((err) => {
      console.log(err);
      return -1;
    });

  console.log(travelData);
  return travelData;
};

module.exports = {
  getTravelInfo,
};
