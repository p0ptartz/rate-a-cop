const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    departments: {
        type: String,
        required: true,
        trim: true,
    },
    officers: {
        type: String,
        required: true,
        trim: true
    }
})

const Location = model("Location", locationSchema)

module.exports = Location