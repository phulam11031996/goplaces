const mongoose = require('mongoose');
const userModel = require("../schemas/UserSchema");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch((error) => console.log(error));

const addUser = async (newUser) => {

  try {
    const userToAdd = new userModel(newUser);
    const savedUser = await userToAdd.save();
    return savedUser;
  } catch (error) {
    return false;
  }
}

module.exports = {
  addUser
}