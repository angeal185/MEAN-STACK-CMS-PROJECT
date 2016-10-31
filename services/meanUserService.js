//meanUserService


var service = require('./service');
var manager = require('../managers/manager');
var meanUserManager = require('../managers/meanUserManager');

/**
 * 
 * @param req
    *      
 * @param res
    *      
 */
exports.create = function (req, res){
   if (req.is('application/json')) {
        var reqBody = req.body;
        var bodyJson = JSON.stringify(reqBody);
        console.log("body: " + bodyJson);
        service.authenticate(req, res, service.adminAuthRole, function(creds) {
            console.log("in auth callback");
            meanUserManager.create(reqBody, creds, function(result) {
                res.send(result);
            });
        });
    } else {
        res.status(415);
        res.send({success: false});
    }
};


/**
 * 
 * @param req
    *      
 * @param res
    *      
 */
exports.update = function (req, res){
  if (req.is('application/json')) {
        var reqBody = req.body;
        var bodyJson = JSON.stringify(reqBody);
        console.log("body: " + bodyJson);
        service.authenticate(req, res, service.adminAuthRole, function(creds) {
            console.log("in auth callback");
            meanUserManager.update(reqBody, creds, function(result) {
                res.send(result);
            });
        });
    } else {
        res.status(415);
        res.send({success: false});
    }   
};


/**
 * 
 * @param req
    *      
 * @param res
    *      
 */
exports.delete = function (req, res){
  service.authenticate(req, res, service.adminAuthRole, function(creds) {
        console.log("in auth callback");
        var id = req.params.id;
        if (id !== null && id !== undefined) {
            meanUserManager.delete(id, creds, function(result) {
                res.send(result);
            });
        }else{
            res.send({success: false});
        }

    });
};


/**
 * 
 * @param req
    *      
 * @param res
    *      
 */
exports.get = function (req, res){
  service.authenticate(req, res, service.adminAuthRole, function(creds) {
        console.log("in auth callback");
        var id = req.params.id;
        if (id !== null && id !== undefined) {
            meanUserManager.get(id, creds, function(result) {
                res.send(result);
            });
        }else{
            res.send({});
        }

    });
};


/**
 * 
 * @param req
    *      
 * @param res
    *      
 */
exports.list = function (req, res){
  service.authenticate(req, res, service.adminAuthRole, function(creds) {
        console.log("in auth callback");
        meanUserManager.list(creds, function(result) {
            res.send(result);
        });
    });
};


/**
 * 
 * @param req
    *      
 * @param res
    *      
 */
exports.changePassword = function (req, res){
  if (req.is('application/json')) {
        var reqBody = req.body;
        var bodyJson = JSON.stringify(reqBody);
        console.log("body: " + bodyJson);
        service.authenticate(req, res, service.userAuthRole, function(creds) {
            console.log("in auth callback");
            meanUserManager.changePassword(reqBody, creds, function(result) {
                res.send(result);
            });
        });
    } else {
        res.status(415);
        res.send({success: false});
    }
};


/**
 * 
 * @param req
    *      
 * @param res
    *      
 */
exports.roleList = function (req, res){
  service.authenticate(req, res, service.adminAuthRole, function() {
        console.log("in auth callback");
        meanUserManager.roleList(function(result) {
            res.send(result);
        });
    });
};



