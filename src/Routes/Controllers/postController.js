const model = require('../../Models/Profesores')

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