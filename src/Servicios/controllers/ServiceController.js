const Service =require ('../models/Service');

//Crear un nuevo servicio

function create(req,res){
    let service = new Service();
    let params =req.body;

    service.name = params.name;
    service.date = params.date;
    service.adress = params.adress;
    service.tel = params.tel;
    service.email = params.email;


    service.save( (error,serviceProgramed) => {
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{

            if(!serviceProgramed){
            res.status(400).send({
                statusCode: 400,
                message: "Error al programar el servicio"
            })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message:"Servicio programado satisfactoriamente",
                    dataService: serviceProgramed
                })
            }
        }
    })

}
//Se crea otra función para importar a mongoDB los servicios seleccionados por el cliente y manejandolo como un subconjunto
function addService(req,res){
    let parameters = req.body;
    let idService = req.params.idService;

    Service.findByIdAndUpdate( idService, parameters, (error, serviceAdded) => {
        if(error){
            res.status(500).send({
                statusCode:500,
                message: "Error en el servidor"

            })
        }else{
            if(!serviceAdded){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al ingresar el servicio"
                })
            }else{
                res.status(200).send({
                    statusCode:200,
                    message:"Servicio añadido"
                })
            }
        }
    })
}



module.exports = {
    create, addService
}


