const mongoose = require('mongoose'),
Schema = mongoose.Schema;

//crear esquema
const eventSchema = new Schema({
	username: String,
	comentario: String,
	comentarios:[]
},{collection: 'comentarios'});

//crear modelo
const eventModel = mongoose.model('Comentario',eventSchema);

//exportar modelo
module.exports = eventModel;