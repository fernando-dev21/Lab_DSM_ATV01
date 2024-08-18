const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('bancoATV', 'root', 'alunofatec', {
    host: 'localhost',
    dialect: 'mysql'
});

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade:{
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco:{
        type: D
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep:{
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    celular:{
        type: DataTypes.STRING,
        allowNull: false
    },
});

sequelize.sync({ force: true }).then(async () => {

    await Cliente.bulkCreate([
        {
            nome: 'José Silva',
            idade: '24',
            endereco: 'Rua aguia de haia, 643',
            bairro: 'Centro',
            cep: '99999-999',
            telefone: '9999-9999',
            celular: '99999-9999'
        },
        {
            nome: 'Antonio Sales',
            idade: '34',
            endereco: 'Rua aguia de haia, 643',
            bairro: 'Centro',
            cep: '99999-999',
            telefone: '9999-9999',
            celular: '99999-9999'
        },
        {
            nome: 'Regina Lucia',
            idade: '24',
            endereco: 'Rua aguia de haia, 643',
            bairro: 'Centro',
            cep: '99999-999',
            telefone: '9999-9999',
            celular: '99999-9999'
        }
    ]);
    console.log("Clientes iniciais adicinados no banco de dados com sucesso.");
});