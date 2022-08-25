const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    titre: String,
    image: String,
    contenu: String,

}, {timestamps: true})




module.exports = mongoose.model('blogs', BlogSchema)