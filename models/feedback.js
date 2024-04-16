const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    foodName: String,
    imageURL: String,
    review: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
