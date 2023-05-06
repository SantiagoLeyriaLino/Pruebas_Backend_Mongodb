const {uploadController} = require('../Controllers/uploadController')

const uploadHandler = async(req,res)=>{
    try{
        // let data = req.body
        // let info = await uploadController(data);
        // return res.status(200).json(info)
        res.send('todo ok')
    }catch (error){
        res.status(500).json({error:error.message})
    }
}

module.exports = uploadHandler