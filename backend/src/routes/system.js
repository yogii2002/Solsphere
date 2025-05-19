const express = require('express');
const router = express.Router();
const SystemStatus = require('../models/SystemStatus');
router.post('/', async (req, res) => {
  const data = new SystemStatus(req.body);
  await data.save();
  res.sendStatus(201);
});
router.get('/', async (req, res) => {
  const { os, issue } = req.query;
  let query = {};
  if (issue) query[issue] = false;
  const list = await SystemStatus.find(query).sort('-timestamp');
  res.json(list);
});
module.exports = router;