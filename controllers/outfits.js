module.exports = {
  index:  outfitsIndex,
  show:   outfitsShow,
  create: outfitsCreate,
  update: outfitsUpdate,
  delete: outfitsDelete
};

const Outfit = require('../models/outfit');

function outfitsIndex(req, res) {
  Outfit.find({
    user: req.user._id
  })
  .populate("items")
  .exec((err, outfits) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    return res.status(200).json({ outfits });
  });
}

function outfitsCreate(req, res) {
  let outfit  = new Outfit(req.body.outfit);
  outfit.user = req.user._id;
  outfit.save((err, outfit) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    return res.status(201).json({ outfit });
  });
}

function outfitsShow(req, res) {
  Outfit
    .findById(req.params.id)
    .populate("items")
    .exec((err, outfit) => {
      if (err) return res.status(500).json({ message: "Something went wrong." });
      if (!outfit) return res.status(404).json({ message: "Outfit not found." });
      return res.status(200).json({ outfit });
    });
}

function outfitsUpdate(req, res) {
  Outfit.findByIdAndUpdate(req.params.id, req.body.outfit, { new: true },  (err, outfit) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!outfit) return res.status(404).json({ message: "Outfit not found." });
    return res.status(200).json({ outfit });
  });
}

function outfitsDelete(req, res) {
  Outfit.findByIdAndRemove(req.params.id, (err, outfit) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!outfit) return res.status(404).json({ message: "Outfit not found." });
    return res.status(204).send();
  });
}
