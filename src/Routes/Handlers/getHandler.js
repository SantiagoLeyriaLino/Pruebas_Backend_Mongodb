const getController = require("../Controllers/getController");


const getHandler = async(req,res)=>{
    try{
        let info = await getController();
        return res.status(200).json(info)
    }catch (error){
        res.status(500).json({error:error.message})
    }
}

module.exports = getHandler