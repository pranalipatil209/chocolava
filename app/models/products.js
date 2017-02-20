/**
 * login module
 * @module productDetails
 * @see module:config
 * */

/**
 * import dependencies
 * */
var util = require('util'),
    eventEmitter = require('events').EventEmitter,
    Firebase = require('firebase'),
    config = require('../config');

/**
 * Initialize the firebase app
 * */
Firebase.initializeApp(config.firebase);
var rootRef = Firebase.database().ref();

/**
 * @class productDetails
 * */
function productDetails() {
    eventEmitter.call(this);
}

/** inherit eventEmitter by productDetails */
util.inherits(productDetails, eventEmitter);

/**
 * Connects with firebase and gets all data
 * @method getProducts
 * @param {productDetails~productDetailsCallback} cb - The callback that handles the response.
 */
productDetails.prototype.getProducts = function(cb){
    rootRef.on('value', function (snapshot) {
        var FirebaseContent = snapshot.val();
        console.log(FirebaseContent);
        cb(null,FirebaseContent);
    }, function(error){
        console.log('The read failed : ',error);
        cb(error.code,null);
    });
};
/**
 * This callback is a part of productDetails class
 * @callback productDetails~productDetailsCallback
 * @typedef {object} result
 * */

/** @exports productDetails */
module.exports = new productDetails;



