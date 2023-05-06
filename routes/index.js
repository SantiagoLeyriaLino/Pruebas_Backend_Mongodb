const Santiago = require('express').Router();
const getHandler = require('./GetHandler');
const postHandler = require('./PostHandler');

Santiago.get('/', getHandler)
Santiago.post('/', postHandler)

module.exports = Santiago;