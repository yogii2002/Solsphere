const mongoose = require('../config');
const schema = new mongoose.Schema({
  machineId: String,
  timestamp: Date,
  encrypted: Boolean,
  osUpdated: Boolean,
  antivirus: Boolean,
  sleepOk: Boolean,
  sleepTimeout: Number
});
module.exports = mongoose.model('SystemStatus', schema);