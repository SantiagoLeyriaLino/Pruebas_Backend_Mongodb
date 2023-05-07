const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')

const EstudiantesScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        edad:{
            type: String
        },
        courses:[{type: mongoose.Schema.Types.ObjectId, ref:'cursos'}] //en caso de que el estudiante esté limitado a un solo curso, se beria quitar el array y solo dejar el obj, de esta forma hacemos una relacio de varios a uno
    },
    {
        versionKey: false,
    }
)

EstudiantesScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('estudiantes',EstudiantesScheme)