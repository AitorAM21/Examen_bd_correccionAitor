const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    id         : { type: Number },
    title      : { type:String, default:'' },
    name       : { type:String, default:'' },
    description: { type:String, default:'' },
    link       : { type:String, default:'' }
}
const Esquema = new Schema(schema, params);
const model   = mongoose.model('categories', Esquema);

module.exports = model