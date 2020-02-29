const mongoose = require('mongoose');
const { PositionEnum } = require('../constants');

const StatementSchema = mongoose.Schema({
  text: { type: String, required: true },
  position: { type: String, enum: PositionEnum, required: true }
});

module.exports = mongoose.model('Statement', StatementSchema);
