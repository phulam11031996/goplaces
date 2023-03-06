const { compareSync } = require("bcrypt");
const UserService = require("../models/UserService");

const login = async (req, res) => {
  const loginInfo = {
    email: req.body.email,
    password: req.body.password,
  };

  const result = await UserService.login(loginInfo);

  if (result.error) {
    res.status(403).json({ error: result.error });
  } else if (result.jwt) {
    res.status(200).json({ jwt: result.jwt });
  } else {
    res.status(500).json({ message: "Unknown error" });
  }
};

const register = async (req, res) => {
  const newUser = {
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
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
    console.log(validationErrors);
    res.status(401).json({ messages: validationErrors });
  } else {
    res.status(200).json({ messages: "Thanks for signing up" });
  }
};

module.exports = {
  register,
  login,
};
