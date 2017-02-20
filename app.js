/**
 * Creating server instance & bind to the port
 * @see module:app/config
 **/

/**
 * import dependencies
 * */
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	logger = require('morgan'),
  cors = require('cors'),
	config = require('./app/config'),
	port = process.env.PORT || 3000;


/**
 * setting CORS for multiple hosts
 **/
var	whitelist = ['http://localhost:4200','http://localhost:8080','http://gomobile.herokuapp.com', 'https://gomobile.herokuapp.com'];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};

/** middleware */
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(logger('dev'));

/**
 * using controllers as middleware
 * @see module:app/controller
 */
app.use(require('./app/controller'));

/** Assigning port to the server */
app.listen(port,function(){
	console.log('Server is running on port :: ',port);
});
