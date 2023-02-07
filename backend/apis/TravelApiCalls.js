const axios = require("axios");

const getAttractionListInBoundry = async (region) => {
  const tr_longitude =
    parseFloat(region.longitude) + parseFloat(region.longitudeDelta);
  const tr_latitude =
    parseFloat(region.latitude) + parseFloat(region.latitudeDelta);
  const bl_longitude =
    parseFloat(region.longitude) - parseFloat(region.longitudeDelta);
  const bl_latitude =
    parseFloat(region.latitude) - parseFloat(region.latitudeDelta);

  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary",
    params: {
      tr_longitude: tr_longitude,
      tr_latitude: tr_latitude,
      bl_longitude: bl_longitude,
      bl_latitude: bl_latitude,
      currency: "USD",
      lunit: "km",
      lang: "en_US",
    },
    headers: {
      "X-RapidAPI-Key": process.env.TRAVELADVISOR_API_KEY,
      "X-RapidAPI-Host": process.env.TRAVELADVISOR_API_HOST,
    },
  };

  let travelData;
  await axios
    .request(options)
    .then((res) => {
      travelData = res.data.data;
    })
    .catch((err) => {
      console.error(err);
      travelData = [];
    });
  travelData = [];
  const cleanTravelData = travelData
    .filter((ele) => "name" in ele && "latitude" in ele && "longitude" in ele)
    .map((ele) => {
      return {
        name: ele.name,
        latitude: ele.latitude,
        longitude: ele.longitude,
        numReviews: "num_reviews" in ele ? ele.num_reviews : "0",
        photo: "photo" in ele ? ele.photo.images.medium.url : "",
        ranking_subcategory:
          "ranking_subcategory" in ele ? ele.ranking_subcategory : "",
        rating: "rating" in ele ? ele.rating : "0.0",
        isClosed: "is_closed" in ele ? ele.is_closed : false,
        description: "description" in ele ? ele.description : "",
        webUrl: "web_url" in ele ? ele.web_url : "",
        phone: "phone" in ele ? ele.phone : "",
        address_obj: "address_obj" in ele ? ele.address_obj : "",
        subtype: "subtype" in ele ? ele.subtype.name : "",
      };
    });
  return cleanTravelData;
};

module.exports = {
  getAttractionListInBoundry,
};
