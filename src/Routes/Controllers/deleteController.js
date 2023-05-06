const mongoose = require('mongoose')
const model = require('../../Models/Profesores')

const parseId = (id) =>{
    return new mongoose.Types.ObjectId(id)
}

const deleteController = (id) =>{
    let info = model.deleteOne(
        {_id: parseId(id)}
    )
    return info;
}

module.exports = deleteController