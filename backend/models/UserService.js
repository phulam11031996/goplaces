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

const postSavedPlaces = async (userEmail, placeInfo) => {
  try {
    const user = await UserSchema.findOne({ email: userEmail });
    if (!user) {
      return { error: "User not found" };
    }

    const existingPlaceIndex = user.savedPlaces.findIndex(
      (p) => p.locationId === placeInfo.locationId
    );

    console.log(existingPlaceIndex)

    if (existingPlaceIndex !== -1) {
      user.savedPlaces.splice(existingPlaceIndex, 1);
    console.log('hlo')
    } else {
      user.savedPlaces.push(placeInfo);
    console.log('yoo')
    }

    const savedUser = await user.save();
    return savedUser;
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

    const existingPlaceIndex = user.places.findIndex(
      (p) => p.locationId === placeInfo.locationId
    );

    if (existingPlaceIndex !== -1) {
      return false;
    }

    const savedUser = await user.save();
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

const getVistedPlaces = async (userEmail) => {
  try {
    const user = await UserSchema.findOne({ email: userEmail });
    if (!user) {
      return { error: "User not found" };
    }

    return user.vistedPlaces;
  } catch (err) {
    return err;
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
