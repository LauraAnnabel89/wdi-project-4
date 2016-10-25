const mongoose   = require ("mongoose");

const itemSchema = new mongoose.Schema({
  item:       { type: String, unique: true, trim: true, required: true },
  image:      { type: String, trim: true }
}, {
  timestamps: true
});

module.exports   = mongoose.model("Item", itemSchema);
