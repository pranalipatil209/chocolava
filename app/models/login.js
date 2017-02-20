/**
 * login module
 * @module login
 * @see module:config
 * @see module:database
 * */

/**
 * import dependencies
 * */
var util = require('util'),
	eventEmitter = require('events').EventEmitter,
	express = require('express'),
	app = express(),
	jwt = require('jsonwebtoken'),
	config = require('../config'),
	database = require('./database');

/** set secret Key*/
app.set('superSecret',config.secret);

/**
 * @class login
 * */
function login(){
	eventEmitter.call(this);
}

/** inherit eventEmitter by login */
util.inherits(login, eventEmitter);

/**
 * validates user and generate token
 * @method checkUser
 * @param {object} data - user's data received as request body from user.
 * @param {login~loginCallback} cb - The callback that handles the response.
 */
login.prototype.checkUser = function(data, cb){
	database.cred.findOne({email: data.email},function(err,user){
		if (err){
			cb(err,null);
		}
		console.log(user);
		if(!user){
			cb(null,{success: false, message:'User does not exist'});
		}
		else if(data.password !== user.password){
			cb(null,{success: false, message: 'Invalid Password'});
		}
		else{
			var token = jwt.sign(user,app.get('superSecret'));
			cb(null,{success: true, message: 'Successfully LoggedIn', _token : token});
		}
	})
};
/**
 * This callback is a part of login class
 * @callback login~loginCallback
 * @typedef {object} result
 * @property {boolean} success - indicates user is valid or not
 * @property {String} message - status meassage pass as a response
 * @property {String} _token - unique token to manage the authentication
 */

/** @exports login */
module.exports = new login;
