const mongoose = require('mongoose')
const model = require('../../Models/Profesores')

const parseId = (id) =>{
    return new mongoose.Types.ObjectId(id)
}

const putController = (id,data) =>{
    let info = model.updateOne({_id: parseId(id)},
    data)
    return info;
} 

module.exports = putController