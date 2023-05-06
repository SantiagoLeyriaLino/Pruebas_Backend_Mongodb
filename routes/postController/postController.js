const model = require('../../models/profesores')

const postController = (name,edad,avatar,email) =>{
   let data = model.create({
        name,
        edad,
        avatar,
        email
   })
   return (data)
}

module.exports= postController;