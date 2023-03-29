const TravelApiCalls = require("../apis/TravelApiCalls");

const getTravelInfo = async (req, res) => {
  const region = req.query.region;
  const pre = req.query.pre;
  const attractions = await TravelApiCalls.getAttractionListInBoundry(region);
  // const restaurants = await TravelApiCalls.getAttractionListInBoundry(region);
  // const hotels = await TravelApiCalls.getAttractionListInBoundry(region);
  // filter rating

  if (travelData.length == 0) {
    res.status(400).json(attractions);
  } else {
    res.status(200).json(attractions);
  }
};

module.exports = {
  getTravelInfo,
};
