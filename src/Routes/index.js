const Santiago = require('express').Router();
const postHandler = require('./Handlers/postHandler');
const getHandler = require('./Handlers/getHandler');
const putHandler = require('./Handlers/putHandler');
const deleteHandler = require('./Handlers/deleteHandler')


Santiago.get('/', getHandler);

Santiago.post('/',postHandler);

Santiago.put('/:id',putHandler);

Santiago.delete('/:id', deleteHandler)

module.exports = Santiago;