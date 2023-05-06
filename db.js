const mongoose = require('mongoose');
const DB_URI = 'mongodb://127.0.0.1/instituciones';

module.exports = () => {
  const connect = async () => { // Declara la función como asíncrona
    try {
      await mongoose.connect(DB_URI, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('CONEXION CORRECTA');
    } catch (error) {
      console.log('DB:ERROR', error.message);
    }
  };

  connect();
};