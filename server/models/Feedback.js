const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema({
    review: {
        type: String,
        required: false,
        trim: true,
    },
    rating: {
        type: Number,
        required: false,
    },
    city: {
        type: String,
        ref: "Location",
    }
});

const Feedback = model('Feedback', feedbackSchema);

module.exports = Feedback;