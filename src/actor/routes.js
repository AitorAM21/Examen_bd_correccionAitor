const express = require('express');
const router  = express.Router();

const ctrl = require('./actor.functions');

// rutas
router.get('/', ctrl.listActors);
router.get('/videos/:id', ctrl.getActorsVideos)
router.get('/ben', ctrl.getActorNamedBen)
router.get('/:id', ctrl.getActor);


module.exports = router;