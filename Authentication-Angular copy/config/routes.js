const express  = require("express");
const router   = express.Router();

const authentications = require("../controllers/authentications");
const users           = require("../controllers/users");
const items           = require("../controllers/items");

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

module.exports = router;
