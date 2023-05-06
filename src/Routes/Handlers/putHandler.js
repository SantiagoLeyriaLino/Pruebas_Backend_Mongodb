const putController = require('../Controllers/putController')

const putHandler = async (req,res) =>{
    try{
        let {id} = req.params;
        let data = req.body;
        let info = await putController(id,data); 
        res.status(200).json(info)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = putHandler 