const Sequelize = require('sequelize');

const connection = new Sequelize('bd_cadastro', 'vinicius', 'muitocurta801',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection