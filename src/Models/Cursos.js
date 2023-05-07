const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')


const CursosScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        teachers:[{type: mongoose.Schema.Types.ObjectId, ref:'profesores'}]
    },
    {
        versionKey: false,
    }
)

CursosScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('cursos',CursosScheme)