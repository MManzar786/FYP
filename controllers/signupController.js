const Register = require("../models/user");
module.exports = function(app) {
  app.post("/register", (req, res) => {
    // Object destructring
    // We can write it same as cnic = req.body.cnic and password = req.body.password
    console.log("Adding...");
    const { cnic, password } = req.body;

    const newRegister = new Register({
      cnic,
      password
    });
    newRegister.save(function(err) {
      if (err) throw err;
      console.log("data saved");
      res.end();
    });
  });
};
