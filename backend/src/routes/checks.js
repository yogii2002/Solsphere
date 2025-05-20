const router = require('express').Router();
const { exec } = require('child_process');
// optional: implement on-demand utility run
router.get('/health', (req, res) => res.json({ status: 'ok' }));
module.exports = router;