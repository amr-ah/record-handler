const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    key: String,
    counts: [Number],
    createdAt: {type: Date},
    value: String,
});

module.exports = mongoose.model('record', recordSchema);