const model = require('../../models/profesores')

const options = {
    page:2,//aquí iria el valor de query
    limit:2
}

const getController = async () => {
    // let info = await model.find({})
    let info = await model.paginate({},options)
    return info
};

module.exports = getController;