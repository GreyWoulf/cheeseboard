const {sequelize} = require('./db');
const {DataTypes, Model} = require('sequelize');

class Board extends Model {}

Board.init({
  type: DataTypes.STRING,
  description: DataTypes.STRING,
  rating: DataTypes.INTEGER
},{
  sequelize
})

module.exports = {Board};
