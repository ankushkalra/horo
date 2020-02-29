const Statement = require('../models/statementModel');

const aggregate = (pipeline) => {
  return Statement.aggregate(pipeline);
};

module.exports = { aggregate };
