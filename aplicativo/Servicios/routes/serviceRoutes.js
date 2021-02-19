const express = require('express');
const ServiceController = require('../controllers/ServiceController');
const api = express.Router();


//Rutas
api.get('/programacion',(req,res) => {
    console.log('Llego a la sección de programacion');
});
api.post('/',ServiceController.create);
api.put('/:idService',ServiceController.addService);

module.exports = api;