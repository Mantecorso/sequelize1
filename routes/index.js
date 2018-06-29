var express = require('express');
var router = express.Router();
const connection = require('../config/conectionsql');

/* GET home page. */
router.get('/', function(req, res, next) {

    connection
      .authenticate()
      .then(() => { console.log("Conexion establecida")})
      .catch(err=>{console.log('error '+err)})
      
  res.render('index', { title: 'Express' });
});



module.exports = router;
