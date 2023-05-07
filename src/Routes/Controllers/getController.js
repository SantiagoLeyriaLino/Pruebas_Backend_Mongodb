const model = require('../../Models/Profesores') 
const options = require('../../utils/configPaginate')

const getController = async () => {
    // let info = await model.find({})
    let info = await model.paginate({},options) // paginate sirve para la paginacion, con la configuracion pasada en la constante option definimos cuantos documentos queremos por pagina
    return info
};

module.exports = getController;