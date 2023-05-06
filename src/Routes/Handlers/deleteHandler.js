const deleteController = require('../Controllers/deleteController')

const deleteHandler = async(req,res) =>{
    try{
        let {id} = req.params
        let info = await deleteController(id)
        res.status(200).json(info)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = deleteHandler;