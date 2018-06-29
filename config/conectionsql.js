const Sequelize = require('sequelize');

const sequelize = new Sequelize('luisdos', 'root', 'iker5nerea13', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    port: 5000,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


module.export = sequelize;