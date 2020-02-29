const mongoose = require('mongoose');
const { HoroEnum } = require('../constants');

const HoroSchema = mongoose.Schema({
  date: { type: Date, required: true },
  sign: { type: String, enum: HoroEnum, required: true },
  text: { type: String, required: true }
});

module.exports = mongoose.model('Horo', HoroSchema);
