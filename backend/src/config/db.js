const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/system_health', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
module.exports = mongoose;