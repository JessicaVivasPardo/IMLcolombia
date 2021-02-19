const mongoose = require('mongoose');
const Client = require('../models/Client');


//Funcion para crear nuevo usuario
function create(req,res){
    let client = new Client();
    let params =req.body;

    client.name = params.name;
    client.email = params.email;
    client.message = params.message;
    client.tel = params.tel;
    client.service = params.service;
    
    client.save((error,clientCreate) => {
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            });
        }else{
            if(!clientCreate){
                res.status(400).send({
                    statusCode:400,
                    message:"Error al insertar usuario"
                })
            }else{
                res.status(200).send({
                    statusCode:200,
                    message: "Usuario almacenado correctamente",
                    dataClient: clientCreate
                })
            }
    }
})
}

// Funcion consultar clientes registrados
function getClients(req,res){

  Client.find ({},(error,getRegister)=>{
    if(error){
        res.status(500).send({
            statusCode: 500,
            message: "Error en el servidor"
        })
    }else{
        res.status(200).send({
            statusCode: 200,
            message: "Resgitro clientes",
            getRegister: getRegister
        })
    }
  })
    
}

module.exports = {
    create, getClients
}

