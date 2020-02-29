const Horo = require('../models/horoModel');

const saveHoro = async (data) => {
  const horo = new Horo(data);
  const result = await horo.save();
  return result;
};

const getHoro = (query) => {
  return Horo.findOne(query);
};

const aggregate = (pipeline) => {
  return Horo.aggregate(pipeline);
}

module.exports = { saveHoro, getHoro, aggregate };
