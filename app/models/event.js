const mongoose = require('mongoose'),
Schema = mongoose.Schema;

//crear esquema
const eventSchema = new Schema({
	name: String,
	slug:{
		type:String,
		unique: true
	},
	description: String
});
//slug es creado por el nombre
eventSchema.pre('save', function(next){
	this.slug = slugify(this.name);
	next();
});

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
//crear modelo
const eventModel = mongoose.model('Event',eventSchema);

//exportar modelo
module.exports = eventModel;