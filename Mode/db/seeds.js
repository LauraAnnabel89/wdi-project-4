// const mongoose = require("mongoose");
// const config   = require("../config/config");
//
// const User     = require("../models/user");
// const Item     = require("../models/item");
//
// mongoose.connect(config.db);
//
// User.collection.drop();
//
// const user = {
//   username: "Laura",
//   firstName: "Laura",
//   lastName: "Laura",
//   image: "https://secure.gravatar.com/avatar/644e46420d27a970469e32fbeeca1aa9?s=320",
//   email: "laura@laura.com",
//   password: "password",
//   passwordConfirmation: "password",
//   items: []
// };
//
//
//
// User.create(user, (err, user) => {
//   if (err) return console.log("Something went wrong");
//   return console.log('User was created');
// });

const mongoose   = require("mongoose");
const config     = require("../config/config");
const async      = require("async");
const Bluebird   = require("bluebird");

mongoose.Promise = Bluebird;

mongoose.connect(config.db);

const User       = require("../models/user");
const Item       = require("../models/item");
const Outfit    = require("../models/outfit");

User.collection.    drop();
Item.collection.    drop();
Outfit.collection. drop();

async.waterfall([
  createUsers,
  createItems,
  createOutfits
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
        user: users[0]._id,
        item: "Sweater",
        image: "http://d1nr5wevwcuzuv.cloudfront.net/product_photos/37739079/Japanese_20harajuku_20galaxy_20cat_20sweater_400sq.jpg"
      }
    ];

    Bluebird.map(items, item => {
      return Item.create(item);
    }).then((items) => {
      done(null);
    }).catch(done);
  });
}

function createOutfits(done) {
  User.find((err, users) => {
    if (err) return done(err);

    Item.find((err, items) => {
      if (err) return done(err);

      const outfits = [
        {
          user: users[0],
          name: "Winter",
          items: [items[0]]
        }
      ];

      Bluebird.map(outfits, outfit => {
        return Outfit.create(outfit);
      }).then((outfits) => {
        done(null);
      }).catch(done);
    });
  });
}

// function createDeeds(done){
//   User.find((err, users) => {
//     if (err) return done(err);
//
//     Deed.create({
//       user:     users[0]._id,
//       deed:     "Walk my dog",
//       image:    "http://www.dogwalkerscheltenham.co.uk/wp-content/uploads/2015/02/Prices-300x198.jpg",
//       location: "London",
//     }, (err, deed) => {
//       if (err) return done(err);
//
//       const request = new Request({
//         sender: users[1]._id,
//         receiver: deed.user,
//         deed:     deed._id,
//         messages: [
//           {
//             sender: users[1]._id,
//             body: "Hello, I'd like to help",
//           },
//           {
//             sender: users[0]._id,
//             body: "I need some help!"
//           }
//         ],
//         rating: 5
//       });
//
//       request.save((err, request) => {
//         if (err) return done(err);
//         done(null, request);
//       });
//     });
//   });
// }
