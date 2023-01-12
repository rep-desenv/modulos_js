const Sequelize = require('sequelize')
const sequelize = new Sequelize('crud','diegoportes','lancevak',{dialect: 'mysql', host: 'localhost', port: 3306})
module.exports = sequelize
/*Adição de comentário para ver se arquivo reflete.*/
/*Mais um comentário para esse arquivo a partir de outra máquina */
/* mais um comentário de outro computador */