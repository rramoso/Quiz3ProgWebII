const Comentario = require('../models/comentario');


module.exports = {
	showEvents: (req,res)=>{
		Comentario.find({},(err,comentarios)=>{
			if(err){
				res.status('404');
				res.send('Comentario not found');
			}else{
				
				res.render('pages/comentarios',{comentarios:comentarios});
			}
		});
	},

	showSingleEvent: (req,res)=>{
		Comentario.findOne({_id: req.params.id}, (err,comentario)=>{
			if(err){
				console.log('error');
				res.status('404');
				res.send('Comentario not found');
			}else{

				res.render('pages/single',{comentario:comentario});
			}
		});	
	},

	 seedEvents:(req, res)=> {
  // create some events
	  const comentarios = [
	    { username: 'MartinjMartinez', comentario: 'Gano Trump!'},
	    { username: 'Edward', comentario: 'Tengo sueño...'},
	    { username: 'Manuel', comentario: 'Nooo! me quede dormido otra vez...'}
	  ];

	  // use the Event model to insert/save
	  Comentario.remove({},() =>{
		 for (comentario of comentarios) {
			    var newComentario = new Comentario(comentario);
			    newComentario.save();
			  }
	  });
	  // seeded!
	  res.send('Database seeded!');
	},

	showCreate:(req, res)=> {
 			res.render('pages/create', {});
	},

	processCreate:(req, res)=> {
	    req.checkBody('username', 'Name is required.').notEmpty();
  		req.checkBody('comentario', 'Description is required.').notEmpty();

  		const errors = req.validationErrors();
 	    if (errors) {
    		req.flash('errors', errors.map(err => err.msg));
   			return res.redirect('/comentarios/create');
 	    }
	  // create a new event
	  const comentarioNew = new Comentario({
	    username: req.body.username,
	    comentario: req.body.comentario
	  });

	  comentarioNew.save();
	  res.redirect('/comentarios');
	},

	deleteEvent:(req, res)=> {
	    Comentario.remove({ _id: req.params.id }, (err) => {
	    // set flash data
	    // redirect back to the events pag
	    res.redirect('/comentarios');
	  });
	},

	processCreateInner:(req, res)=> {
	    req.checkBody('username', 'Name is required.').notEmpty();
  		req.checkBody('comentario', 'Description is required.').notEmpty();

  		const errors = req.validationErrors();
 	    if (errors) {
    		req.flash('errors', errors.map(err => err.msg));
   			return res.redirect('/comentarios/create');
 	    }
	  // create a new event
	  const comentarioNew = new Comentario({
	    username: req.body.username,
	    comentario: req.body.comentario
	  });
	  comentarioNew.save();

	   Comentario.findOne({ _id: req.params.id }, (err, comentario) => {
	    // updating that event
	    comentario.comentarios.push(comentarioNew);
	    comentario.save();
	  });
	  res.redirect('/comentario/'+ req.params.id);
	},

	deleteEvent:(req, res)=> {
	    Comentario.remove({ _id: req.params.id }, (err) => {
	    // set flash data
	    // redirect back to the events pag
	    res.redirect('/comentarios');
	  });
	},

	showEdit:(req, res)=> {
	  Comentario.findOne({ _id: req.params.id }, (err, comentario) => {
	    res.render('pages/edit', {
	      comentario: comentario
	    });
	  });
	},

	processEdit:(req, res)=> {
	 // validate information
	  req.checkBody('username', 'Name is required.').notEmpty();
	  req.checkBody('comentario', 'Description is required.').notEmpty();

	  // finding a current event
	  Comentario.findOne({ _id: req.params.id }, (err, comentario) => {
	    // updating that event
	    comentario.username        = req.body.username;
	    comentario.comentario = req.body.comentario;

	    comentario.save();
	    res.redirect('/comentarios');
	   
	  });
	}


}