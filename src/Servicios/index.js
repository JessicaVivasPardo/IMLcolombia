//conexion a MongoDB

const mongoose = require ('mongoose');
const app = require('./app');
const port = 5000;

mongoose.connect ('mongodb://localhost:27017/servicios',{useNewUrlParser: true, useUnifiedTopology: true}, (error,res)=>{

if(error){
    console.log('Error de conexión con el servidor',error);
}else{
    console.log('Conexión realizada');
    app.listen(port, () => {
        console.log('Escuchando en el puerto ',port);
    })
}
});
