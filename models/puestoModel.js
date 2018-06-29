const Sequelize = require('sequelize'); 
const Connection = require('../config/conectionsql');

const Puesto = Connection.define('puestos', {
    job: {
        type: Sequelize.STRING
    }
});

module.exports = Puesto;