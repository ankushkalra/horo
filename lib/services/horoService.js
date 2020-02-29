const { saveHoro } = require('../repositories/horoRepository');
const { FIRST, NONFIRST } = require('../constants');
const { aggregate } = require('../repositories/StatementRepository');

const addHoro = async ({ sign, date }) => {
  const horo = await generateHoro({ sign, date });
  const res = await saveHoro(horo);
  console.log('1. res = ', res);
  return res;
};

const generateHoro = async ({ sign, date }) => {
  const first = await aggregate([{ $match: { position: FIRST } }, { $sample: { size: 1 } }]);
  const nonFirst = await aggregate([{ $match: { position: NONFIRST } }, { $sample: { size: 6 } }]);

  const firstSentence = first.map((obj) => obj.text)[0];
  const nonFirstSentences = nonFirst.map((obj) => obj.text);
  return { text: firstSentence + ' ' + nonFirstSentences.join(' '), sign, date };
};

module.exports = { addHoro };
