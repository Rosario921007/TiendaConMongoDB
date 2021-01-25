const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-Parser');
const path = require('path');

const app = express();

const indexRoutes = require('./routes/index.js');

//set
app.set('port', process.env.PORT || 3000);
app.set('views', path.join( __dirname, 'views'));

app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//rutas
app.use('/', indexRoutes);


app.listen(app.get('port'), () =>{
	console.log('server por el puerto', app.get('port'));
});