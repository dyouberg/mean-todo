var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    text: String,
    description: {
        type: String,
        default: ""
    },
    created: {
        type: Date,
        default: Date.now
    },
    last_updated: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });

module.exports = mongoose.model('Todo', TodoSchema);
