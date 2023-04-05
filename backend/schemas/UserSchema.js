const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const placeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  locationId: { type: String, required: true },
  name: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  numReviews: { type: String, required: false },
  address: { type: String, required: false },
  photo: { type: String, required: false },
  ranking: { type: String, required: false },
  rating: { type: String, required: false },
  distance: { type: String, required: false },
  isClosed: { type: Boolean, required: false },
  price: { type: String, required: false },
  hotelClass: { type: String, required: false },
  phone: { type: String, required: false },
  website: { type: String, required: false },
  description: { type: String, required: false },
});

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(v);
      },
      message: (props) => `${props.value} is not a valid name!`,
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  nonHashedPassword: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]{8,}$/.test(v);
      },
      message: (props) => `Password must be at least 8 characters long`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]{8,}$/.test(v);
      },
      message: (props) => `Password must be at least 8 characters long`,
    },
  },
  savedPlaces: {
    type: [placeSchema],
    default: [],
  },
  visitedPlaces: {
    type: [placeSchema],
    default: [],
  },
});

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
