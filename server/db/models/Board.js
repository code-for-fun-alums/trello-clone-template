const Sequelize = require("sequelize");
const db = require("../db");
module.exports = Board;

const Board = db.define("board", {
  title: {
    type: Sequelize.String,
    allowNull: false,
    validate: { notEmpty: true },
  },
});
