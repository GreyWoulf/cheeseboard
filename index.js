const {sequelize} = require("./db");
const {User} = require("./User");
const {Board} = require("./Board");
const {Cheese} = require("./Cheese");

// User and Board has one-to-many relationship
// Multiple boards can be added to a User

Board.belongsTo(User) // adds a foreign key on board table for user ID
User.hasMany(Board) // gives magic method for adding boards to user


// Board and Cheese has many-to-many relationship
// A board can have many cheeses
// A cheese can be on many boards
Cheese.belongsToMany(Board, {through : 'cheese_board'})
Board.hasMany(Cheese)

module.exports = {User, Board, Cheese};