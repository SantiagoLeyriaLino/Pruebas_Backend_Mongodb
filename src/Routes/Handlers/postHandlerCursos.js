const postControllerCursos = require('../Controllers/postControllerCursos')

const postHandlerCursos = async(req,res) =>{
    try{
        let {name,teachers} = req.body
        let info = await postControllerCursos(name,teachers);
        return res.status(200).json(info)
    }catch (error){
        res.status(500).json({error:error.message})
    }
}

module.exports = postHandlerCursos;