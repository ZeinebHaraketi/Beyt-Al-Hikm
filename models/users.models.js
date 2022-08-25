const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nom: String,
    prenom: String,
    adresse : String,
    photo: String,
    role: String,
    login: String,
    mdp: String,

}, {timestamps: true})




module.exports = mongoose.model('users', UserSchema)