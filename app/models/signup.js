/**
 * signup module
 * @module signup
 * @see module:database
 * */

/**
 * import dependencies
 * */
var util = require('util'),
	eventEmitter = require('events').EventEmitter,
	database = require('./database');

/**
 * @class signup
 * */
function signup(){
	eventEmitter.call(this);
}

/** inherit eventEmitter by signup */
util.inherits(signup, eventEmitter);

/**
 * save user in database
 * @method saveUser
 * @param {object} data - user's data received as request body from user.
 * @param {signup~signupCallback} cb - The callback that handles the response.
 */
signup.prototype.saveUser = function(data, cb){
	database.userInfo.findOne({email:data.email}, function (error,exist) {
		if(exist){
			cb(null,'User already exist!');
		}
		else{
			var user = new database.userInfo({name:data.name, email:data.email, mobile:data.mobile, password:data.password});
			user.save(function(err, result){
				if(err){
					cb(err,null);
				}else{
					cb(null,'Successfully Registered');
				}
			})
		}
	});
};
/**
 * This callback is a part of signup class
 * @callback signup~signupCallback
 * @param {String} responseMessage
 */

/** @exports signup */
module.exports = new signup;
