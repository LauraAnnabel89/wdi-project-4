const express  = require("express");
const router   = express.Router();

const authentications = require("../controllers/authentications");
const users           = require("../controllers/users");
const items           = require("../controllers/items");
const outfits         = require("../controllers/outfits");

router.route("/register")
  .post(authentications.register);
router.route("/login")
  .post(authentications.login);

router.route('/users')
  .get(users.index);
router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/items')
  .get(items.index);
router.route('/items/:id')
  .get(items.show)
  .put(items.update)
  .delete(items.delete);

router.route('/outfits')
  .get(outfits.index);
router.route('/outfits/:id')
  .get(outfits.show)
  .put(outfits.update)
  .delete(outfits.delete);

module.exports = router;
