const mongoose = require("mongoose");

// connection to database
mongoose
  .connect("mongodb://localhost:27017/UsersDb", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("Database connected successfully "))
  .catch(error => {
    console.log("error while database conecting " + error);
  });
