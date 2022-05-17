const {sequelize} = require('./db');
const {DataTypes, Model} = require('sequelize');

// Creates user model in database
class User extends Model {}

// adds properties (columns) for our model
User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING
},{
  sequelize // what db will we store it in
})

module.exports = {Band};