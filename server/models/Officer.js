const { Schema, model } = require('mongoose');

const officerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: String,
        required: false,
        trim: true,
    },
    officerId: {
        type: Number,
        required: false,
        trim: true,
    },
    ratings: {
        type: String,
        required: false,
        trim: true,
    },
    feedbackList: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Feedback',
        }
    ]
    
});

const Officer = model('Officer', officerSchema);

module.exports = Officer;