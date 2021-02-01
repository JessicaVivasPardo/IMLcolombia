const express = require ('express');
const ClientController = require ('../controllers/ClientController');

const api = express.Router();


//Arquitectura
api.get('/registro',(req,res) => {
    console.log('Clientes registrados');
});
api.post('/',ClientController.create);
api.get('/getRegister',ClientController.getClients);

module.exports = api;