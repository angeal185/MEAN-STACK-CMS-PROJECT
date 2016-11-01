#!/bin/env node
var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var basicAuth = require('basic-auth');
var fs = require('fs');
var webInitializer = require('./initializers/webInitializer');
var templateEngineInitializer = require('./initializers/templates/engine/templateEngineInitializer');
var restServiceInitializer = require('./initializers/restServiceInitializer');
var db = require('./db/db');
var refreshCache = false;
var conf = require('./configuration');
var cors = require('./cors/cors');
var templateEngineUtility = require('./utils/templateEngineUtility');
var cacheControlUtility = require('./utils/cacheControlUtility');

templateEngineUtility.getDefaultTemplateEngine(function (templateEngineRnt) {
    var templateEngine = null;
    if (templateEngineRnt === undefined || templateEngineRnt === null || templateEngineRnt.ext === "") {
        templateEngine = { //fix hbs-angular lag, intergration issue
            name: "Handlebars (hbs)",
            defaultEngine: false,
            engine: "hbs",
            ext: "hbs"
        };
    } else {
        templateEngine = templateEngineRnt;
    }
    var meancms = function () {
        //  Scope.
        var self = this;

        self.setupVariables = function () {
            //  Set the environment variables we need.
            self.ipaddress = process.env.OPENSHIFT_NODEJS_IP || process.env.MEANCMS_IP;
            self.port = process.env.OPENSHIFT_NODEJS_PORT || process.env.MEANCMS_PORT || conf.PORT;
            if (typeof self.ipaddress === "undefined" && !process.env.MONGO_PORT_27017_TCP_ADDR) {
                console.warn('No IP address defined, using 127.0.0.1');
                self.ipaddress = "127.0.0.1";
            }
            ;
        };
        self.terminator = function (sig) {
            if (typeof sig === "string") {
                console.log('%s: Received %s - terminating sample app ...',
                        Date(Date.now()), sig);
                process.exit(1);
            }
            console.log('%s: Node server stopped.', Date(Date.now()));
        };
        self.setupTerminationHandlers = function () {
            //  Process on exit and signals.
            process.on('exit', function () {
                self.terminator();
            });
            // Removed 'SIGPIPE' from the list - bugz 852598.
            ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
                'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
            ].forEach(function (element, index, array) {
                process.on(element, function () {
                    self.terminator(element);
                });
            });
        };
         //Initialize server/create routes/register handlers
        self.initializeServer = function () {
            self.app = express();
            self.app.use(logger('dev'));
            self.app.use(bodyParser.json());// for parsing application/json
            self.app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
            self.app.use(cookieParser('7320s932h79993Ah4'));
            self.app.use(cookieSession({
                name: 'session',
                keys: ['key1', 'key2']
            }));
            self.app.use(express.static(__dirname + '/public'));
            if (conf.CORS_ENABLED) {
                self.app.use(cors.CORS);
            }
            //ejs
            //self.app.set('view engine', 'ejs');   
            //self.app.set("views", __dirname + "/");
            //var auth = express.basicAuth(un, pw);        
            db.initializeMongoDb();

            // initial web apps
            // initializeWebApp(self);
            restServiceInitializer.initialize(self, cacheControlUtility);
            templateEngineInitializer.initialize(__dirname, self, templateEngine);
            webInitializer.initialize(__dirname, self, cacheControlUtility, templateEngine);
            self.app.use(errorHander);
        };

        //application.
        self.initialize = function () {
            self.setupVariables();
            self.setupTerminationHandlers();

            // Create express server and routes.
            self.initializeServer();
        };
        // Start server
        self.start = function () {
            //  Start the app on the specific interface (and port).
            if (process.env.MONGO_PORT_27017_TCP_ADDR) {
                self.app.listen(self.port, function () {
                    console.log('Node server started on Docker');
                });
            } else {
                self.app.listen(self.port, self.ipaddress, function () {
                    console.log('%s: Node server started on %s:%d ...',
                            Date(Date.now()), self.ipaddress, self.port);
                });
            };
        };
    };

    var errorHander = function (err, req, res, next) {
        //res.status(404).send('mistake');
        //res.status(404).sendFile(__dirname + "/public/error.html");
        console.log(err);
        res.redirect("error.html");
    };

    var zapp = new meancms();
    zapp.initialize();
    zapp.start();

});
