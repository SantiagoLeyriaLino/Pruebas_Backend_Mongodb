const mongoose = require ('mongoose')

const DB_URI = "mongodb://mongo:RBm7aDS8gHh5Qd9mERUm@containers-us-west-149.railway.app:6048"
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