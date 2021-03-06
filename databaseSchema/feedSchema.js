//feedSchema
var mongoose = require('mongoose');


var feedSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    link: {type: String, required: true, trim: true},
    language: {type: mongoose.Schema.ObjectId, required: true, ref: "Language"}
});
module.exports = feedSchema;


