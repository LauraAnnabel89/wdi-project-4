module.exports = {
  index:  itemsIndex,
  show:   itemsShow,
  create: itemsCreate,
  update: itemsUpdate,
  delete: itemsDelete
};

const Item = require('../models/item');

function itemsIndex(req, res) {
  Item.find({
    user: req.user._id
  }, (err, items) => {
    if (err)  return res.status(500).json({ message: "Something went wrong." });
    return res.status(200).json({ items });
  });
}

function itemsCreate(req, res) {
  let item    = new Item(req.body.item);
  item.user   = req.user._id;
  item.save((err, item) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    return res.status(201).json({ item });
  });
}

function itemsShow(req, res) {
  Item.findById(req.params.id, (err, item) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!item) return res.status(404).json({ message: "Item not found." });
    return res.status(200).json({ item });
  });
}

function itemsUpdate(req, res) {
  Item.findByIdAndUpdate(req.params.id, req.body.item, { new: true },  (err, item) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!item) return res.status(404).json({ message: "Item not found." });
    return res.status(200).json({ item });
  });
}

function itemsDelete(req, res) {
  Item.findByIdAndRemove(req.params.id, (err, item) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!item) return res.status(404).json({ message: "Item not found." });
    return res.status(204).send();
  });
}
