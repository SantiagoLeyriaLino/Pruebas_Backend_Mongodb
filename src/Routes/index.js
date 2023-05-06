const Santiago = require('express').Router();
const postHandler = require('./Handlers/postHandler');
const getHandler = require('./Handlers/getHandler');


Santiago.get('/', getHandler)
Santiago.post('/',postHandler)

module.exports = Santiago;