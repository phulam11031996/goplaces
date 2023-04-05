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

    let nonHashedPassword = await UserSchema.findOne({ nonHashedPassword: password });
    if (!nonHashedPassword) {
      return { error: "Invalid email or password" };
    }

    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid) {
    //   return { error: "Invalid email or password" };
    // }

    const token = jwt.sign({ userId: user._id }, "secret_key");
    return { userInfo: user, jwt: token };
  } catch (err) {
    return false;
  }
};

const postSavedPlaces = async (userEmail, placeInfo) => {
  try {
    const user = await UserSchema.findOne({ email: userEmail });
    if (!user) {
      return { error: "User not found" };
    }

    const existingPlaceIndex = user.savedPlaces.findIndex(
      (p) => p.locationId === placeInfo.locationId
    );

    if (existingPlaceIndex !== -1) {
      user.savedPlaces.splice(existingPlaceIndex, 1);
    } else {
      user.savedPlaces.push(placeInfo);
    }

    await user.save();
    return true;
  } catch (err) {
    return err;
  }
};

const postVisitedPlaces = async (userEmail, placeInfo) => {
  try {
    const user = await UserSchema.findOne({ email: userEmail });
    if (!user) {
      return { error: "User not found" };
    }

    const existingPlaceIndex = user.visitedPlaces.findIndex(
      (p) => p.locationId === placeInfo.locationId
    );

    if (existingPlaceIndex === -1) user.visitedPlaces.push(placeInfo);

    await user.save();
    return true;
  } catch (err) {
    return err;
  }
};

const getSavedPlaces = async (userEmail) => {
  try {
    const user = await UserSchema.findOne({ email: userEmail });
    if (!user) {
      return { error: "User not found" };
    }

    return user.savedPlaces;
  } catch (err) {
    return false;
  }
};

const getVisitedPlaces = async (userEmail) => {
  try {
    const user = await UserSchema.findOne({ email: userEmail });
    if (!user) {
      return { error: "User not found" };
    }

    return user.visitedPlaces;
  } catch (err) {
    return false1;
  }
};

module.exports = {
  register,
  login,
  postSavedPlaces,
  postVisitedPlaces,
  getSavedPlaces,
  getVisitedPlaces,
};
