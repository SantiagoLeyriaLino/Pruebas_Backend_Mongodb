const multer = require('multer') // multer sirve para subir archivos(de todo tipo)

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, 'uploads') //con esto le decimos a multer que va a guardar todos nuestros archivos en una carpeta que se llama uploads
    },
    filename: function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)//esto le indica a mmulter que al nombre del archivo le agregue la estampa de tiempo, de esta forma evitamos que dos archivos llamados igual se remplacen(originalname es el nombre original del archivo)
    }
})

const upload = multer({storage: storage})//aquí le decimos que la configuracion que va a tomar es la que definimos en storage

exports.upload = upload.single('myFile')//cuando mandamos el archivo por body debe tener la clave myFile


exports.uploadController = () =>{

}

