const model = require('../../Models/Cursos')
const options = require('../../utils/configPaginate')

const getControllerCursos = async() =>{
        // let info = await model.find({})
    let info = await model.paginate({},options) // paginate sirve para la paginacion, con la configuracion pasada en la constante option definimos cuantos documentos queremos por pagina
    return info
}

module.exports = getControllerCursos;