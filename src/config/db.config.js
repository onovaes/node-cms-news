// Connects to SqLite or Mysql db with sequelize lib
const { Sequelize } = require("sequelize")
const sequelize = require("sequelize")

/*
// Mysql Example
const connection = new Sequelize('my-database','root','123456',{
    host: 'localhost',
    dialect: 'mysql'
})
*/

const connection = new Sequelize('sqlite:.sqlite/db.db')

module.exports = connection;
