/**
 * signup controller
 * @module Router
 * @see module:models/singup
 */

/**
 * import dependencies
 * */
var express = require('express'),
	Router = express.Router(),
	signup = require('../models/signup');

/**
 * save user in database
 */
Router.post('/signup', function(req,res){
	var data = {
		name : req.body.name,
		email : req.body.email,
		mobile : req.body.mobile,
		password : req.body.password
	};
	signup.saveUser(data, function(err,result){
		if(err){
			res.json({err : err});
		}
		else{
			res.json({success:true, data:result});
		}
	})
});

/**
 * @exports Router
 */
module.exports = Router;
