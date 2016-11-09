
const express = require('express');
router = express.Router();
mainController = require('./controllers/main.controller');
eventsController = require('./controllers/events.controller');
module.exports = router;

router.get('/',mainController.showHome);
router.get('/comentarios',eventsController.showEvents);
router.get('/comentarios/seed',eventsController.seedEvents);
router.get('/comentario/:id',eventsController.showSingleEvent);
router.get('/comentarios/create',  eventsController.showCreate);
router.post('/comentarios/create', eventsController.processCreate);
router.get('/comentarios/:id/delete', eventsController.deleteEvent);
router.get('/comentarios/:id/edit', eventsController.showEdit);
router.post('/comentarios/:id',     eventsController.processEdit);
router.post('/comentarios/createsub/:id',     eventsController.processCreateInner);