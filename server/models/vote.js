const Sequelize = require('sequelize');

module.exports = (Models) => {
  const Vote = Models.define('Vote', {
    choice: {
      type: Sequelize.INTEGER
    },
    comment: {
      type: Sequelize.STRING
    },
    rating: {
      type: Sequelize.INTEGER
    }
  });
  return Vote;
};
