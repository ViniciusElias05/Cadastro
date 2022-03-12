const Sequelize = require('sequelize');

const connection = new Sequelize('bd_cadastro', 'vinicius', '12345',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection