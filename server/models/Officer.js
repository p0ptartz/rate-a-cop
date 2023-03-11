const { Schema, model } = require('mongoose');

const officerSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: String,
        required: true,
        trim: true,
    },
    officerId: {
        type: Int32Array,
        required: true,
        trim: true,
    },
    ratings: {
        type: String,
        required: true,
        trim: true,
    }
});

const Officer = model('Officer', officerSchema);

module.exports = Officer;