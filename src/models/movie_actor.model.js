const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    movie_id            : { type: Number },
    adult               : { type: Boolean, default: 'Gollum' },
    gender              : { type: Number, default:1 },
    known_for_department: { type:String, default:'Acting' },
    name                : { type:String, default:'' },
    original_name       : { type:String, default:'' },
    character           : { type:String, default:'' },
    popularity          : { type: Number },
    profile_path        : { type:String, default:'' },
    credit_id           : { type:String, default:'' },
    order               : { type:Number, default:1 },
    id                  : { type:Number, default:1 },
    cast_id             : { type:Number, default:1 }
}
const Esquema = new Schema(schema, params);
const model   = mongoose.model('actors', Esquema);

module.exports = model