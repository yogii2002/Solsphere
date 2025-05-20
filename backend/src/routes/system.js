const router = require('express').Router();
const SystemStatus = require('../models/SystemStatus');

router.post('/', async (req, res) => {
  try {
    const s = new SystemStatus(req.body);
    await s.save();
    res.status(201).end();
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.get('/', async (req, res) => {
  const list = await SystemStatus.find().sort('-timestamp');
  res.json(list);
});

module.exports = router;