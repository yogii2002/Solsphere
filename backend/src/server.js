const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/system', require('./routes/system'));
app.listen(5000, () => console.log('API running on http://localhost:5000'));