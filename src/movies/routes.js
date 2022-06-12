const express = require('express');
const router  = express.Router();

const cMovie        = require('./movie.functions');
const cMovieDetails = require('./movie_detail.functions');
const cMovieVideo   = require('./movie_video.functions');

router.get('/last',  cMovie.getLast)
router.get('/videos/:id', cMovieVideo.getMovieVideos)
router.get('/trailers', cMovieVideo.getLastTrailers)
router.get('/first', cMovie.getFirstMovie)
router.get('/:id',   cMovieDetails.getMovieDetails)


// Ruta inicial de portada
router.get('/', (req, res) => {
    // Solo mostrar que estamos dentro de la carpeta y enlaces a las rutas
    res.render('movies/index');
});

module.exports = router;