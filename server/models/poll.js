const Sequelize = require('sequelize');

module.exports = (Models) => {
  const Poll = Models.define('Poll', {
    userId: {
      type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.STRING
    },
    prompt: {
      type: Sequelize.STRING
    },
    choices: {
      type: Sequelize.STRING
    },
    tags: {
      type: Sequelize.STRING
    },
    lifetime: {
      type: Sequelize.INTEGER
    },
    anonymous: {
      type: Sequelize.STRING
    },
    participants: {
      type: Sequelize.STRING
    }
  });
  return Poll;
};