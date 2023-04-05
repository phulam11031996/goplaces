const UserService = require("../models/UserService");

const getVistedPlaces = async (req, res) => {
  const { userEmail } = req.query;

  const result = await UserService.getVisitedPlaces(userEmail);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(403).json({ error: result.error });
  }
};

const getSavedPlaces = async (req, res) => {
  const { userEmail } = req.query;

  const result = await UserService.getSavedPlaces(userEmail);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(403).json({ error: result.error });
  }
};

const postSavedPlaces = async (req, res) => {
  const { userEmail, placeInfo } = req.body;

  const result = await UserService.postSavedPlaces(userEmail, placeInfo);

  if (result) {
    res.status(200).json({ message: "success" });
  } else {
    res.status(403).json({ error: result.error });
  }
};

const postVisitedPlaces = async (req, res) => {
  const { userEmail, placeInfo } = req.body;

  const result = await UserService.postVisitedPlaces(userEmail, placeInfo);

  if (result.error) {
    res.status(403).json({ error: result.error });
  } else {
    res.status(200).json({ message: "Places are saved" });
  }
};

const login = async (req, res) => {
  const loginInfo = {
    email: req.body.email,
    password: req.body.password,
  };

  const result = await UserService.login(loginInfo);

  if (result.error) {
    res.status(403).json({ error: result.error });
  } else if (result.jwt) {
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: "Unknown error" });
  }
};

const register = async (req, res) => {
  const newUser = {
    fullName: req.body.fullName,
    email: req.body.email,
    nonHashedPassword: req.body.password,
    password: req.body.password,
    visitedPlaces: [],
    savedPlaces: [],
  };

  const result = await UserService.register(newUser);

  if (result.code == 11000) {
    res.status(401).json({
      messages: "Email already Exist",
    });
  } else if (result.errors) {
    const validationErrors = Object.values(result.errors).map(
      (error) => error.message
    );
    res.status(401).json({ messages: validationErrors });
  } else {
    res.status(200).json({ messages: "Thanks for signing up" });
  }
};

module.exports = {
  register,
  login,
  postSavedPlaces,
  postVisitedPlaces,
  getSavedPlaces,
  getVistedPlaces,
};
