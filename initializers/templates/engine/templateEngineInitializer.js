var ejsInitializer = require('../engines/ejsInitializer');
var hbsInitializer = require('../engines/hbsInitializer');
var jadeInitializer = require('../engines/jadeInitializer');
var angularInitializer = require('../engines/angularInitializer');
exports.initialize = function (__dirname, self, templateEngine) {
    if (templateEngine !== undefined && templateEngine !== null) {
        ejsInitializer.initialize(__dirname, self, templateEngine);
        hbsInitializer.initialize(__dirname, self, templateEngine);
        jadeInitializer.initialize(__dirname, self, templateEngine);
	angularInitializer.initialize(__dirname, self, templateEngine);
    }else{
        hbsInitializer.initialize(__dirname, self, templateEngine);
    }

};


//todo 
//fix hbs lag issue, dynamic loading issue, hbs-angular intergration

//status
//ejs/angular - working
//jade/angular - working
//angular/angular - working
//handlebars/angular - fucked
