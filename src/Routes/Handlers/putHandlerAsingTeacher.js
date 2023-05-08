const putControllerAsingTeacher = require('../Controllers/putControllerAsingTeacher')

const putHandlerAsingTeacher = async(req,res) =>{
    try{
        let {id} = req.params;// id del curso al que se le quiere asignar el teacher
        let {teacher} = req.body;// teacher que va a ser asignado al curso
        let info = await putControllerAsingTeacher(id,teacher); 
        res.status(200).json(info)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = putHandlerAsingTeacher;