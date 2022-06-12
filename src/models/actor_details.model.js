const mongoose         = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const Schema           = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    id                  : { type: Number},
    imdb_id             : { type: String},
    known_for_department: { type: String},
    adult               : { type: Boolean, default: false },
    also_known_as       : [
        {type:String}
    ],
    biography     : { type: String, default: 'Acting' },
    birthday      : { type: String, default: '' },
    deathday      : { type: String, default: '' },
    gender        : { type: Number, default: 0 },
    homepage      : { type: String, default: '' },
    name          : {type:String},
    place_of_birth: {type:String},
    popularity    : { type: Number, default: 0 },
    profile_path  : {type:String},
}

const dbSchema = new Schema(schema, params);
dbSchema.plugin(mongoosePaginate);
let model = mongoose.model('actor_details', dbSchema)

module.exports = model