const mongoose = require("mongoose");
const UserSchema = require("../schemas/UserSchema");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error));

const register = async (newUser) => {
  try {
    const userToAdd = new UserSchema(newUser);
    const savedUser = await userToAdd.save();
    return savedUser;
  } catch (err) {
    return err;
  }
};

const login = async (loginInfo) => {
  try {
    const { email, password } = loginInfo;
    let user = await UserSchema.findOne({ email: email });
    if (!user) {
      return { error: "Invalid email or password" };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { error: "Invalid email or password" };
    }
    const token = jwt.sign({ userId: user._id }, "secret_key");
    return { jwt: token };
  } catch (err) {
    return err;
  }
};

module.exports = {
  register,
  login,
};
