const modelCursos = require('../../Models/Cursos')

const postControllerCursos = async (name,teachers) =>{
    let data = await modelCursos.create({
        name,
        teachers
   })
   return (data)
}

module.exports = postControllerCursos;