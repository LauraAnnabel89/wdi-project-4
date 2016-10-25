const mongoose = require("mongoose");
const config   = require("../config/config");

const User     = require("../models/user");

mongoose.connect(config.db);

User.collection.drop();

const user = {
  username: "Laura",
  firstName: "Laura",
  lastName: "Laura",
  image: "http://fillmurray.com/200/200",
  email: "laura@laura.com",
  password: "password",
  passwordConfirmation: "password",
  items: []
};

User.create(user, (err, user) => {
  if (err) return console.log("Something went wrong");
  return console.log('User was created');
});
