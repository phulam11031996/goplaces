const TravelApiCalls = require("../apis/TravelApiCalls");

const getTravelInfo = async (req, res) => {
  const region = req.query;
  const travelData = await TravelApiCalls.getAttractionListInBoundry(region);

  if (travelData.length == 0) {
    res.status(400).json(travelData);
  } else {
    res.status(200).json(travelData);
  }
};

module.exports = {
  getTravelInfo,
};
