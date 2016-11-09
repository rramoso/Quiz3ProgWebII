//dependencias
const express = require('express'),
app = express(),
port = process.env.PORT || 8080,
expressLayouts = require('express-ejs-layouts');
mongoose = require('mongoose');
//configurar la aplicacion
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
//conectar con la base de datos
mongoose.connect('mongodb://martin:martin@ds149207.mlab.com:49207/comentarios');
//setear las rutas
app.use(require('./app/routes'));


//start server
app.listen(port,() =>{
	console.log(`App listening on http://localhost:${port}`);

});