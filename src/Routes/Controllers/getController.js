const model = require('../../Models/Profesores')

const options = {
    page:1,//aquí iria el valor de query
    limit:10
}

const getController = async () => {
    // let info = await model.find({})
    let info = await model.paginate({},options)
    return info
};

module.exports = getController;