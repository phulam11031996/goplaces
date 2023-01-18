const express = require('express');
const userRouter = require('./routers/UserRoutes')
const app = express();
const port = 5001;

app.use(express.json());

app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});    
