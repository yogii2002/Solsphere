require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); app.use(express.json());
app.use('/api/system', require('./routes/system'));
app.use('/api', require('./routes/checks'));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API running on port ${PORT}`));