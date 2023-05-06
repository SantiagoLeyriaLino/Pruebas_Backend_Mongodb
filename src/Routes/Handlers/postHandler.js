const postController = require('../Controllers/postController')

const postHandler = async(req,res)=>{
    try{
        let {name,edad,avatar,email} = req.body
        let info = await postController(name,edad,avatar,email);
        return res.status(200).json(info)
    }catch (error){
        res.status(500).json({error:error.message})
    }
}

module.exports = postHandler