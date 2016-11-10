const mongoose   = require("mongoose");
const config     = require("../config/config");
const async      = require("async");
const Bluebird   = require("bluebird");

mongoose.Promise = Bluebird;
mongoose.connect(config.db);

const User       = require("../models/user");
const Item       = require("../models/item");

User.collection.drop();
Item.collection.drop();

async.waterfall([
  createUsers,
  createItems,
], function(err) {
  if (err) return console.log(err);
  console.log("Seeding complete");
  return process.exit();
});

function createUsers(done) {
  const users = [{
    username: "Laura",
    firstName: "Laura",
    lastName: "Laura",
    image: "https://secure.gravatar.com/avatar/644e46420d27a970469e32fbeeca1aa9?s=320",
    email: "laura@laura.com",
    password: "password",
    passwordConfirmation: "password",
    items: []
  }];

  Bluebird.map(users, user => {
    return User.create(user);
  }).then((users) => {
    done(null);
  }).catch(done);
}

function createItems(done) {
  User.find((err, users) => {
    if (err) return done(err);

    const items = [
      {
        user: users[0].id,
        item: "Stella McCartney Coat",
        image: "https://cache.net-a-porter.com/images/products/736586/736586_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "Saint Laurent Bag",
        image: "https://cache.net-a-porter.com/images/products/405376/405376_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "Victoria Beckham Boyfriend Jeans",
        image: "https://cache.net-a-porter.com/images/products/714898/714898_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "Givenchy White Blazer",
        image: "https://cache.net-a-porter.com/images/products/731605/731605_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "T By Alexander Wang",
        image: "https://cache.net-a-porter.com/images/products/640983/640983_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "The Row Sweater",
        image: "https://cache.net-a-porter.com/images/products/746233/746233_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "J Crew Stripe T",
        image: "https://cache.net-a-porter.com/images/products/693324/693324_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "Equipment Tank",
        image: "https://cache.net-a-porter.com/images/products/786706/786706_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "ACNE Boots",
        image: "https://cache.net-a-porter.com/images/products/746069/746069_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "ACNE Leather Jacket",
        image: "https://cache.net-a-porter.com/images/products/730768/730768_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "Stan Smiths",
        image: "https://cache.net-a-porter.com/images/products/707889/707889_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "Madeleine Beanie",
        image: "https://cache.net-a-porter.com/images/products/752084/752084_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "Toteme Jumper",
        image: "https://cache.net-a-porter.com/images/products/756662/756662_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "Toteme Jumper",
        image: "https://cache.net-a-porter.com/images/products/756662/756662_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "Tiffany Bangle",
        image: "https://cache.net-a-porter.com/images/products/830884/830884_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "J Brand Skinny Leather Jeans",
        image: "https://cache.net-a-porter.com/images/products/750927/750927_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "Stuart Weitzman Heels",
        image: "https://cache.net-a-porter.com/images/products/716399/716399_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "The Row Dress",
        image: "https://cache.net-a-porter.com/images/products/815567/815567_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "The Row Bag",
        image: "https://cache.net-a-porter.com/images/products/643748/643748_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "The Row Cardigan",
        image: "https://cache.net-a-porter.com/images/products/746235/746235_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "James Perse Long Sleeve Top",
        image: "https://cache.net-a-porter.com/images/products/677852/677852_in_pp.jpg"
      },
      {
        user: users[0].id,
        item: "Hatch Dungarees",
        image: "https://cache.net-a-porter.com/images/products/776997/776997_in_pp.jpg"
      }
    ];

    Bluebird.map(items, item => {
      console.log(item);
      return Item.create(item);
    }).then((items) => {
      done(null);
    }).catch(done);
  });
}
