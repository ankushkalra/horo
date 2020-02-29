const express = require('express');
const { getHoro } = require('../repositories/horoRepository');
const { addHoro } = require('../services/horoService');

const router = express.Router();

router.get('/horo', async (req, res) => {
  try {
    const { sign, date } = req.query;
    console.log('1. sign, date = ', sign, date);

    let horo = await getHoro({ sign, date });
    console.log('3. horo = ', horo);
    if (!horo) {
      horo = await addHoro({ sign, date });
    }

    res.json(horo);
  } catch (error) {
    console.log('1. error = ', error);
    res.status(500).json({ status: 500, message: 'Internal Server Error' });
  }
});

module.exports = router;
