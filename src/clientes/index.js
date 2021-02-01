const mongoose = require("mongoose");
const app = require("./app");

const port = 5001;

mongoose.connect ('mongodb://localhost:27017/clientes', {useNewUrlParser: true, useUnifiedTopology: true}, (error, res)=> {
    if(error){
        console.log('Error de conexión',error);
    }else{
        console.log('Nos correctamos correctamente');
        app.listen(port, () => {
            console.log('Escuchando en el puerto',port);
        })
    }
})
