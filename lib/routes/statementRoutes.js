const express = require('express');
const Statement = require('../models/statementModel');

const router = express.Router();

router.get('/stat', async (req, res) => {
  const stat = await Statement.findOne();
  return res.json(stat);
});

module.exports = router;
