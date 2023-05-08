const cursosModel = require('../../Models/Cursos')

const putControllerAsingTeacher = async(id,teacher) =>{
     let info = await cursosModel.findByIdAndUpdate(id,{$push:{teachers:teacher}});
     return info
}

module.exports = putControllerAsingTeacher;