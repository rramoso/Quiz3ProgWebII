const Event = require('../models/event');
module.exports = {
	showEvents: (req,res)=>{
		Event.find({},(err,events)=>{
			if(err){
				res.status('404');
				res.send('Events not found');
			}
		});

		res.render('pages/events',{events:events});
	},

	showSingleEvent: (req,res)=>{
		const event = {name:'Basketball',slug:'basketball',description:'juego de negros y algunos blancos'};

		res.render('pages/single',{event:event});
	},

	 seedEvents:(req, res)=> {
  // create some events
	  const events = [
	    { name: 'Basketball', description: 'Throwing into a basket.' },
	    { name: 'Swimming', description: 'Michael Phelps is the fast fish.' },
	    { name: 'Weightlifting', description: 'Lifting heavy things up' },
	    { name: 'Ping Pong', description: 'Super fast paddles' }
	  ];

	  // use the Event model to insert/save
	  Event.remove({},() =>{
		 for (event of events) {
			    var newEvent = new Event(event);
			    newEvent.save();
			  }
	  });
	 

	  // seeded!
	  res.send('Database seeded!');
}
}