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
        type: Schema.Types.ObjectId,
        ref: "Officer",
        required: true
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: "Location",
        required: true
    }
});

const Feedback = model('Feedback', feedbackSchema);

module.exports = Feedback;