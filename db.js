const mongoose = require ('mongoose')

const DB_URI = 'mongodb://127.0.0.1/instituciones'
//mongodb://localhost:27017
module.exports=()=>{
    const connect =()=>{
        try{
            mongoose.connect(
                DB_URI,
                {
                    keepAlive:true,
                    useNewUrlParser:true,
                    useUnifiedTopology:true
                },
                console.log('CONEXION CORRECTA')
            )
        }catch(err){
            console.log('DB: ERROR')
        }
    }
    connect()
}