const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserHandler");

// /api
router.route("/register").post(userController.register);

// /api
router.route("/login").post(userController.login);

// /api
router.route("/userrating").post(userController.postUserRating);

// /api
router
  .route("/savedplace")
  .get(userController.getSavedPlaces)
  .post(userController.postSavedPlaces);

// /api
router
  .route("/visitedplace")
  .get(userController.getVistedPlaces)
  .post(userController.postVisitedPlaces);

module.exports = router;
