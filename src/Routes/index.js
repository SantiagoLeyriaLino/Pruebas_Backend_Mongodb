const Santiago = require('express').Router();
const postHandler = require('./Handlers/postHandler');
const getHandler = require('./Handlers/getHandler');
const putHandler = require('./Handlers/putHandler');
const deleteHandler = require('./Handlers/deleteHandler')
const uploadHandler = require('./Handlers/uploadHandler');
const { upload } = require('./Controllers/uploadController');


Santiago.get('/', getHandler);

Santiago.post('/',postHandler);

Santiago.put('/:id',putHandler);

Santiago.delete('/:id', deleteHandler);

Santiago.post("/upload",upload, uploadHandler)

module.exports = Santiago;