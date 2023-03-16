const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema({
    review: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    officer: {
        type: String,
        ref: "Officer",
        required: false
    },
    city: {
        type: String,
        ref: "Location",
        required: false
    }
});

const Feedback = model("Feedback", feedbackSchema);

module.exports = Feedback;