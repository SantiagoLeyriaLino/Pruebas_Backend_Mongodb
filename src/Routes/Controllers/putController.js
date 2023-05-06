const model = require('../../Models/Profesores')
const parseId = require('../../utils/parseId')


const putController = (id,data) =>{
    let info = model.updateOne({_id: parseId(id)},
    data)
    return info;
} 

module.exports = putController