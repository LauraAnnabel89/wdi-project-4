const mongoose   = require ("mongoose");

const outfitSchema = new mongoose.Schema({
  name:  { type: String, trim: true, required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true }],
  user:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true
});

module.exports   = mongoose.model("Outfit", outfitSchema);
