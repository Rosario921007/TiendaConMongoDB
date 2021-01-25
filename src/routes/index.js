const express = require('express');
const router = express.Router();

const model  = require('../model/task')();
//exportar modulos



 router.get('/', (req, res) => {

 	model.find({}, (err, tasks) =>{
 		if (err) throw err;
 		res.render('index', {
 		title: 'Tienda de Cosmeticos con Mongodb',
 		tasks: tasks



 		} );




 	
 	});


});

router.post('/add', (req, res) => {
let body = req.body;
body.status = false;

model.create(body, (err, task) => {
	if (err) throw err;
	res.redirect('/');
	console.log(body);
});
///console.log(body);
});
 //fun para buscar el id retorna un erro o los datos y guarda
//actualiza
 router.get('/turn/:id', (req, res) => {
 	let id = req.params.id;
 	model.findById({_id: id}, (err, task) => {
 		if (err) throw err;
 		task.status = !task.status;
 		task.save()
 		.then(() => res.redirect('/')) 

 	});
 });


//elimar
 router.get('/delete/:id', (req, res) =>{
 	let id = req.params.id;
 	model.remove({_id: id}, (err, task) =>{
 		if (err) throw err;
 		res.redirect('/')
 	})
 })

module.exports = router;