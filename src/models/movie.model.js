const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    id          : { type:String },
    movie_id    : { type:Number },
    official    : { type:Boolean, default:false },
    size        : { type:String, default:'' },
    iso_639_1   : { type:String, default:'' },
    iso_3166_1  : { type:String, default:'' },
    name        : { type:String, default:'' },
    key         : { type:String, default:'' },
    site        : { type:String, default:'' },
    type        : { type:String, default:'' },
    published_at: { type:String, default:'' }
}
const Esquema = new Schema(schema, params);
const model   = mongoose.model('movies', Esquema);

module.exports = model