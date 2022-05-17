const {sequelize} = require('./db');
const {DataTypes, Model} = require('sequelize');

class Cheese extends Model {}

Cheese.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING
},{
  sequelize
})

module.exports = {Cheese};