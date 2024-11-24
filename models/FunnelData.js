const mongoose = require('mongoose');

const FunnelDataSchema = new mongoose.Schema({
  stage: { type: String, required: true },
  value: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FunnelData', FunnelDataSchema);
