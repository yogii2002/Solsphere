const mongoose = require('../config/db');
const SystemStatus = new mongoose.Schema({
  machineId: String,
  timestamp: Date,
  encrypted: Boolean,
  osUpdated: Boolean,
  antivirus: Boolean,
  sleepOk: Boolean
});
module.exports = mongoose.model('SystemStatus', SystemStatus);