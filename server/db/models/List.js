const Sequelize = require("sequelize");
const db = require("../db");
module.exports = List;

const List = db.define("list", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});
