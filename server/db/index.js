const db = require("./db");
const User = require("./models/User");
const Board = require("./models/Board");
const Card = require("./models/Card");
const List = require("./models/List");

//one to many
User.hasMany(Board);
Board.belongsTo(User); // or many to many boards to users

// one to many?...
Board.hasMany(List);
List.belongsTo(Board);
//one to many
List.hasMany(Card);
Card.belongsTo(List);

module.exports = {
  db,
  models: {
    User,
    Board,
    Card,
    List,
  },
};
