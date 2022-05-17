const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('user', 'board', 'cheese', {
  dialect: 'sqlite', // What type of sql?
  storage: './db.sqlite', // file location for our db
  logging: false
})

module.exports = {sequelize};