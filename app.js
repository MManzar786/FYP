const express = require("express");
const bodyParser = require("body-parser");
var signupController = require("./controllers/signupController");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");

require("./src/database/mongoose");
var app = express();
const PORT = process.env.PORT || 3000;

//   setting bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//     res.status(503).send('please try again later')
// })
app.use(express.json());
//router
app.use(userRouter);
app.use(authRouter);
app.use(profileRouter);

signupController(app);

app.listen(PORT, () => {
  console.log("Server listening on PORT " + PORT);
});
