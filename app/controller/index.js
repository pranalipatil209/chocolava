/**
 * index for routes
 */

/**
 * import dependencies
 * */
var express = require('express'),
	Router = express.Router();
/** default route */
Router.get('/',function(req,res){
	res.json({success: true, message : 'You are Online'});
});

/**
 * middleware
 */
Router.use('/api',require('./signup'));
Router.use('/api',require('./login'));
Router.use('/borrow',require('./foodfood'));

/**
 * @exports Router
 */
module.exports = Router;