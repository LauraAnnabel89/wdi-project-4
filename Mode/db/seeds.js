const mongoose = require("mongoose");
const config   = require("../config/config");

const User     = require("../models/user");
const Item     = require("../models/item");

mongoose.connect(config.db);

User.collection.drop();

const user = {
  username: "Laura",
  firstName: "Laura",
  lastName: "Laura",
  image: "https://secure.gravatar.com/avatar/644e46420d27a970469e32fbeeca1aa9?s=320",
  email: "laura@laura.com",
  password: "password",
  passwordConfirmation: "password",
  items: []
};



User.create(user, (err, user) => {
  if (err) return console.log("Something went wrong");
  return console.log('User was created');
});
