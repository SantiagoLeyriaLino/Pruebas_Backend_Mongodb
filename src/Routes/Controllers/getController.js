const model = require('../../Models/Profesores') 

const options = {
    page:2,//aquí iria el valor de query
    limit:2
}

const getController = async () => {
    // let info = await model.find({})
    let info = await model.paginate({},options) // paginate sirve para la paginacion, con la configuracion pasada en la constante option definimos cuantos documentos queremos por pagina
    return info
};

module.exports = getController;