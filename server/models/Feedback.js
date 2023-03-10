const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema ({
    review: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Int,
        required: true,
    }
});

const Feedback = model('Feedback', feedbackSchema);

module.exports = Feedback;