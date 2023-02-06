const TravelService = require("../models/TravelService");

const getTravelInfo = async (req, res) => {
  const result = await TravelService.getTravelInfo(req.query);

  if (result == -1) {
    res.status(400).json();
  } else {
    res.status(200).json(result);
  }
};

module.exports = {
  getTravelInfo,
};
