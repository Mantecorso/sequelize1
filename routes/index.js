var express = require('express');
var router = express.Router();
const connection = require('../config/conectionsql');
const PuestoModel = require('../models/puestoModel');

/* GET home page. */
router.get('/', function(req, res, next) {

    connection
    //esto solo comprueba el estado de la conexsion, no es necesario
      .authenticate()
      .then(() => { console.log("Conexion establecida")})
      .catch(err=>{console.log('error '+err)})

    PuestoModel.sync({force: true}).then(()=> {
      //
      return PuestoModel.create({
        job: 'Prueba'
      })
    })  

  res.render('index', { title: 'Express' });
});



module.exports = router;
