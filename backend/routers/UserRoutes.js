const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserHandler");

// /api
router.route("/register")
  .post(userController.register);

// /api
router.route("/login")
  .post(userController.login);

module.exports = router;
