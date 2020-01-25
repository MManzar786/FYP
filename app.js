const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const signupController = require("./controllers/signupController");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const searchRouter = require("./routes/search");
const profileRouter = require("./routes/profile");
const linkedInRouter = require("./routes/linkedin-auth");
const passportSetup = require("./config/passport-setup");

require("./src/database/mongoose");
var app = express();
app.use(passport.initialize());
const PORT = process.env.PORT || 5000;

//   setting bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//     res.status(503).send('please try again later')
// })
app.use(express.json());
//router
app.use(cors());
app.options("*", cors());
app.use(userRouter);
app.use(authRouter);
app.use(searchRouter);
app.use(profileRouter);
app.use("/auth", linkedInRouter);

signupController(app);

app.listen(PORT, () => {
  console.log("Server listening on PORT " + PORT);
});
