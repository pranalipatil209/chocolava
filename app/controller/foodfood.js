/**
 * login Controller
 * @module Router
 */

/**
 * import dependencies
 * */
var express = require('express'),
    app = express(),
    Router = express.Router(),
    food = require('../models/foodfood');

/**
 * checks whether user is valid or not
 * @return token and product details as a response
 * */
Router.get('/getfood', function(req,res){
    var resp = food;
    res.json(resp);
});

/**
 * @exports Router
 */
module.exports = Router;
