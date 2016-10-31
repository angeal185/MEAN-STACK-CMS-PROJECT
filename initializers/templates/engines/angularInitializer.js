// initialize angular template engine
exports.initialize = function (__dirname, self, templateEngine) {
    if (templateEngine.engine === 'angular') {
        self.app.set('view engine', 'angular');
        self.app.set("views", __dirname + "/public");
        console.log("Template Engine is: " + templateEngine.engine);
    }
};