/**
 * login Controller
 * @module Router
 * @see module:models/login
 */

/**
 * import dependencies
 * */
var express = require('express'),
	app = express(),
	Router = express.Router(),
	login = require('../models/login'),
	product = require('../models/products');

/**
 * checks whether user is valid or not
 * @return token and product details as a response
 * */
Router.post('/login', function(req,res){
	login.checkUser(req.body, function(err,result){
		if(err){
			res.json({err: err});
		}
		else if(result.success){
			product.getProducts(function(err,data){
                if(err){
                    res.json({result : result, err : err});
                }
                else{
                    res.json({result : result, data : data});
                }
            });
		}
		else {
            res.json({result : result, data : null});
		}
	})
});

/**
 * @exports Router
 */
module.exports = Router;
