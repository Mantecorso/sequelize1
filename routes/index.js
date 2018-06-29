var express = require('express');
var router = express.Router();
const connection = require('../config/conectionsql');
const PuestoModel = require('../models/puestoModel');

/* GET home page. */
router.get('/', function(req, res, next) {

   
    PuestoModel.sync({force: true}).then(()=> {
      //sincroniza la tabla, la borra y la creas de nuevo
      return PuestoModel.create({
        // y con el return me anyades el siguiente dato
        job: 'Prueba'
      })
    })
    .catch((error)=>{console.error('error '+error)});  

  res.render('index', { title: 'Express' });
});



module.exports = router;
