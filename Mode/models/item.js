const mongoose   = require ("mongoose");

const itemSchema = new mongoose.Schema({
  item:  { type: String, trim: true, required: true },
  image: { type: String, trim: true },
  user:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

module.exports   = mongoose.model("Item", itemSchema);
