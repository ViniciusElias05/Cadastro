const Sequelize = require('sequelize');
const connection= require('./database');

const Cadastro = connection.define('cadastro', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sexo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    idade:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cpf:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    formacao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tecnologia:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    resumo:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Cadastro.sync({force: false});
module.exports = Cadastro;