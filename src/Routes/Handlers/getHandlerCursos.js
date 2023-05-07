const getControllerCursos = require('../Controllers/getControllerCursos')

const getHandlerCursos = async(req, res) =>{
    try{
        let info = await getControllerCursos();
        res.status(200).json(info)
    }catch(err){
        res.estatus(400).json({error:err.message})
    }
}

module.exports = getHandlerCursos;