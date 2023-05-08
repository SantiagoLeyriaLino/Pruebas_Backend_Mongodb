const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')


const CursosScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        teachers:[{type: mongoose.Schema.Types.ObjectId, ref:'profesores', autopopulate: true}]
    },
    {
        versionKey: false,
    }
)

CursosScheme.plugin(mongoosePaginate) //este plugin sirve para hacer el paginado, solo se declara su uso y en el controlador hay que usar paginate en vez de find
CursosScheme.plugin( require('mongoose-autopopulate') ) //este plugin sirve para hacer una relacion automatica, solo hay que agregar la propiedad autopopulate en true 


module.exports = mongoose.model('cursos',CursosScheme)