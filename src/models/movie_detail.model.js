const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    adult                : { type: Boolean, default:false },
    original_language    : { type:String, default:'en' },
    original_title       : { type:String, default:'' },
    overview             : { type:String, default:'' },
    character            : { type:String, default:'' },
    popularity           : { type: Number, default:0 },
    poster_path          : { type:String, default:'' },
    backdrop_path        : { type:String, default:'' },
    release_date         : { type:String, default:'' },
    title                : { type:String, default:'' },
    video                : { type:Boolean, default:false },
    vote_average         : { type:Number, default:0 },
    vote_count           : { type:Number, default:0 },
    belongs_to_collection: { type:String, default:'' },
    budget               : { type:Number, default:0 },
    genres               : [
        { type:Number, default:0 }
    ],
    homepage        : { type:String, default:'' },
    imdb_id         : { type:String, default:'' },
    revenue         : { type:Number, default:0 },
    runtime         : { type:Number, default:0 },
    spoken_languages: [
        { type:String, default:'' }
    ],
    status : { type:String, default:'' },
    tagline: { type:String, default:'' },
    id     : { type:Number, default:1 }
}
const Esquema = new Schema(schema, params);
const model   = mongoose.model('movie_details', Esquema);

module.exports = model