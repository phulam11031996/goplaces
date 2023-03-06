const express = require("express");
const userRouter = require("./routers/UserRoutes");
const travelinforRounter = require("./routers/TravelInfoRoutes");
const app = express();
const port = 5001;

app.use(express.json());

app.use("/api", userRouter);

app.use("/travelinfo", travelinforRounter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
