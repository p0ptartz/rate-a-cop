const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    departments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Department',
    }
],
    officers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Officer',
    }
]
})

const Location = model("Location", locationSchema)

module.exports = Location