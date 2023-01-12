const Sequelize = require('sequelize')
const sequelize = new Sequelize('crud','diegoportes','lancevak',{dialect: 'mysql', host: 'localhost', port: 3306})
module.exports = sequelize
/*Adição de comentário para ver se arquivo reflete.*/