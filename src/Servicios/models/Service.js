//Modelo del controlador de servicios

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



// Para la estructura se tomaron los servicios como un array en el cual cada opción es true (servicio seleccionado) y false(servicio no seleccionado)

let ServiceSchema = new Schema({
    name: String,
    date: String,
    adress: String,
    tel: Number,
    email: String,
    services:[{
        option1: Boolean,   //Opción desinfección por termo-nebulización
        option2: Boolean,   //Opción limpieza avisos publicitarios
        option3: Boolean,   //Opción limpieza vidrios y fachadas
        option4: Boolean,   //Opción reparaciones locativas
        option5: Boolean,   //Opción limpieza cajeros
        option6: Boolean,   //Opción servicios de limpieza
     }]
});


module.exports = mongoose.model('Service',ServiceSchema);