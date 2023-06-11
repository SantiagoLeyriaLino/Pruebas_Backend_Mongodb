const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const initDB = require ('./db')
const Santiago = require('./src/Routes/index');


const server = express();
server.use(express.json());
server.use(cors());
server.use(cookieParser());
server.use(morgan('dev'));

server.use('/', Santiago)

  server.listen(3001, () => {
    console.log('Server running on port 3001');
  });

  initDB();