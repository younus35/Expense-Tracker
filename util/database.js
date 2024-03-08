const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense-tracker', 'root', 'MDafnan18x', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;