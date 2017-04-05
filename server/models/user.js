const Sequelize = require('sequelize');

module.exports = (Models) => {
  const User = Models.define('User', {
    accountType: {
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    gender: {
      type: Sequelize.STRING
    },
    ethnicity: {
      type: Sequelize.STRING
    },
    income: {
      type: Sequelize.INTEGER
    },
    education: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    verified: {
      type: Sequelize.STRING
    }
  });
  return User;
};
