const mMovie       = require('../models/movie.model');
const mMovieDetail = require('../models/movie_detail.model');

exports.getMovieDetails = async (req, res) => {
    const { body, params, query} = req;
    const { id } = params;

    // Buscamos la pelicula por su id
    const movie = await mMovieDetail.findOne({ id });

    // Si no hay pelicula, mostramos un mensaje
    if (!movie) {
        const obj = { message: 'No hay peliculas creadas' }
        return res.render('movies/error', obj);
    }

    // En caso que tenga videos, poner un enlace para la ruta de videos.
    // Ver Readme para mas detalles.
    res.render('movies/details', {movie});

}