const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const userModel = require("../schemas/UserSchema");
const UserService = require("../models/UserService");

let mongoServer;
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(uri, mongooseOpts)
    .catch((error) => console.log(error));
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  const newUser = new userModel({
    name: "test123",
    password: "password123"
  });
  await newUser.save();
});

afterEach(async () => {
  await userModel.deleteMany();
});

test("user test", async () => {
  const newUser = {
    name: "phu123",
    password: "password123123"
  }
  const user = await UserService.addUser(newUser);
  expect(user).toBeDefined();
});