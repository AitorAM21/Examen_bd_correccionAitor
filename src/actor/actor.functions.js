const mActor        = require('../models/movie_actor.model')
const mActorDetails = require('../models/actor_details.model')
const mMovies       = require('../models/movie_detail.model')

exports.listActors = async (req, res) => {
    const actors = await mActor.find({})

    res.send({actors})

}

exports.getActorNamedBen = async (req, res) => {

    const dbQuery = {
        name:{ $regex: 'Adelfa', $options: 'i' }
    }

    // Esto devuelve el primero que coincida
    const actor = await mActor.findOne(dbQuery)
    if (!actor) {
        const obj = { message: 'No existe el actor' }
        return res.send(obj)
    }
    // Cualquiera de estas dos, son validas.
    const actorDetails = await mActorDetails.findOne(dbQuery)
    const actorDetails = await mActorDetails.findOne({
        id: actor.id
    })


    const data = { actor, actorDetails }

    // Los datos del Actor y sus detalles
    res.send({data})

}

exports.getActor = async (req, res) => {
    const {body, params, query} = req
    const id = params.id || query.id || body.id

    const actor = await mActor.findById(id)
    if (!actor) {
        const obj = { message: 'No existe el actor' }
        return res.send(obj)
    }
    const actorDetails = await mActorDetails.findOne(dbQuery)
    const actorDetails = await mActorDetails.findOne({
        id: actor.id
    })

    const data = { actor, actorDetails }

    // Los datos del Actor y sus detalles
    res.send({data})

}

exports.getActorsVideos = async (req, res) => {
    const {body, params, query} = req
    const id = params.id || query.id || body.id

    const actor = await mActor.findById(id)
    if (!actor) {
        const obj = { message: 'No existe el actor' }
        return res.send(obj)
    }
    // Recogemos los MovieActor del actor
    const moviesActor = await mActor.find({
        id: actor.id
    })
    // Recogemos los IDs de las peliculas
    const idsMovies = moviesAcor.map(movieActor=>{
        return movieActor.movie_id
    })

    // Recogemos las peliculas que tengan el id en la lista
    const movies = await mMovies.find({
        id: { $in:idsMovies }
    })

    const data = { actor, movies }

    // Los datos del Actor y sus detalles
    res.send({data})

}

