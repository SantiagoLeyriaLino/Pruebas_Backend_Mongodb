const Santiago = require('express').Router();
const postHandler = require('./Handlers/postHandler');
const getHandler = require('./Handlers/getHandler');
const putHandler = require('./Handlers/putHandler');
const deleteHandler = require('./Handlers/deleteHandler');
const uploadHandler = require('./Handlers/uploadHandler');
const getHandlerCursos = require('./Handlers/getHandlerCursos');
const postHandlerCursos = require('./Handlers/postHandlerCursos')
const putHandlerAsingTeacher = require('./Handlers/putHandlerAsingTeacher')
const { upload } = require('./Controllers/uploadController');


Santiago.get('/profesores', getHandler);

Santiago.post('/profesores',postHandler);

Santiago.put('/profesores/:id',putHandler);

Santiago.delete('/profesores/:id', deleteHandler);

Santiago.post("/upload",upload, uploadHandler);

Santiago.get('/cursos',getHandlerCursos);

Santiago.post('/cursos', postHandlerCursos);

Santiago.put('/cursos/asingTeacher/:id', putHandlerAsingTeacher)


module.exports = Santiago;

//comentario
//comentario dos
//comentario3
//comentario6