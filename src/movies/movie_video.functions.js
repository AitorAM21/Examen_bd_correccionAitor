const mMovieVideo = require('../models/movie_video.model')
const mMovie      = require('../models/movie.model')

exports.getMovieVideos = async (req, res) => {
    const {body, params, query} = req
    const id = params.id || query.id || body.id

    const movie =  await mMovie.findById(id)
    if (!movie) {
        const obj = { message: 'No existe la pelicula' }
        return res.send(obj)
    }
    const videos = await mMovieVideo.find({
        movie_id: movie.id
    })
    const data = { movie, videos }

    // Los datos de la pelicula y sus detalles
    res.send({data})
}

exports.getLastTrailers = async (req, res) => {
    const trailers = await mMovieVideo.find({}).sort({ createdAt: -1 }).limit(10);
    res.send({trailers})
}