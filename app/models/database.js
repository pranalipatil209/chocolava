/**
 * Connecting database and defining schemas
 * @module models/database
 * @see module:config
 */

/**
 * import dependencies
 * */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	express = require('express'),
	autoIncreament = require('mongoose-auto-increment'),
	config = require('../config');

/** Connecting Database */
var connect1 = mongoose.connect(config.database);
autoIncreament.initialize(connect1);

/**
 * @define userInfoSchema
 */
var userInfoSchema = mongoose.Schema({
	id : {
		type : Number,
		require : true,
		default : 1
	},
	name : {
		type : String,
		require : true
	},
	mobile : {
		type : Number
	},
	email : {
		type : String,
		require : true
	},
	password : {
		type : String,
		require : true
	}
});

/** Adding autoIncreament to userSchema */
userInfoSchema.plugin(autoIncreament.plugin,{
	model : 'userInfo',
	field : 'id',
	startAt : 1
});

/**
 * @alias module:model/database.userInfo
 */
var userInfo = mongoose.model('userInfo', userInfoSchema, 'userData');

/**
 *@exports userInfo
 */
exports.userInfo = userInfo;

/**
 * @define credSchema
 */
var credSchema = mongoose.Schema({
	email : {
		type : String,
		require : true
	},
	password : {
		type : String,
		require : true
	}
});

/**
 * @alias module:model/database.cred
 * */
var cred = mongoose.model('cred', credSchema, 'userData');

/**
 * @exports cred
 */
exports.cred = cred;
