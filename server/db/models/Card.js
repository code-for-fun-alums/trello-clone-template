const Sequelize = require("sequelize");
const db = require("../db");
module.exports = Card;

const Card = db.define("card", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});
