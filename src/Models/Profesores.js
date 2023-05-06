const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')

const ProfesoresScheme = new mongoose.Schema(
    {
        name:{
            type: String
        },
        edad:{
            type: String
        },
        avatar: {
            type: String,
            default: 'http://image.com'
        },
        email:{
            type: String,
            unique: true,
            required: true
        }
    },
    {
        versionKey: false,
    }
)

ProfesoresScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('profesores',ProfesoresScheme)