const express = require("express");
const router = express.Router();
const travelController = require("../controllers/TravelInfoHandler")

// /travelinfo/
router
  .route("/")
  .get(travelController.getTravelInfo);

module.exports = router;